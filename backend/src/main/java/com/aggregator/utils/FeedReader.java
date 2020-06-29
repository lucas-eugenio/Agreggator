package com.aggregator.utils;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;

import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.Characters;
import javax.xml.stream.events.XMLEvent;

import com.aggregator.model.News;
import com.aggregator.model.Feed;

public class FeedReader {
  static final String TITLE = "title";
  static final String LINK = "link";
  static final String ITEM = "item";
  static final String DATE = "pubDate";
  static final String DESCRIPTION = "description";

  final URL url;

  public FeedReader(String feedUrl) {
    try {
      this.url = new URL(feedUrl);
    } catch (MalformedURLException e) {
      throw new RuntimeException(e);
    }
  }

  public Feed getFeed() {
    Feed feed = null;
    try {
      boolean isFeedHeader = true;
      String title = "";
      String link = "";
      String date = "";
      String description = "";

      XMLInputFactory inputFactory = XMLInputFactory.newInstance();
      InputStream in = read();
      XMLEventReader eventReader = inputFactory.createXMLEventReader(in);

      while (eventReader.hasNext()) {
        XMLEvent event = eventReader.nextEvent();
        if (event.isStartElement()) {
          String localPart = event.asStartElement().getName().getLocalPart();
          switch (localPart) {
          case ITEM:
            if (isFeedHeader) {
              isFeedHeader = false;
              feed = new Feed(title);
            }
            event = eventReader.nextEvent();
            break;
          case TITLE:
            title = getCharacterData(event, eventReader);
            break;
          case LINK:
            link = getCharacterData(event, eventReader);
            break;
          case DATE:
            date = getCharacterData(event, eventReader);
            break;
          case DESCRIPTION:
            description = getCharacterData(event, eventReader);
            break;
          }
        } else if (event.isEndElement()) {
          if (event.asEndElement().getName().getLocalPart() == (ITEM)) {
            News item = new News(title, link, date, description);
            feed.addItem(item);
            event = eventReader.nextEvent();
            continue;
          }
        }
      }
    } catch (XMLStreamException e) {
      throw new RuntimeException(e);
    }
    return feed;
  }

  private String getCharacterData(XMLEvent event, XMLEventReader eventReader) throws XMLStreamException {
    String result = "";
    event = eventReader.nextEvent();
    if (event instanceof Characters) {
      result = event.asCharacters().getData();
    }
    return result;
  }

  private InputStream read() {
    try {
      return url.openStream();
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }
}