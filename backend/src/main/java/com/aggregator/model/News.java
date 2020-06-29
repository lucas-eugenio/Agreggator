package com.aggregator.model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

public class News {
  private final String title;
  private final String link;
  private final String date;
  private final String description;
  private final DateFormat formatter = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z", Locale.ENGLISH);

  public News(String title, String link, String date, String description) {
    this.title = title;
    this.link = link;
    this.date = date;
    this.description = description;
  }

  public String getTitle() {
    return title;
  }

  public String getLink() {
    return link;
  }

  public String getDate() {
    return date;
  }

  public String getDescription() {
    return description;
  }

  public Boolean hasKeyWords(List<String> keyWords) {
    if (description == null) { return false; }

    Boolean hasSomeKeyWord = false;
    for(String keyWord : keyWords) {
      if (description.toLowerCase().contains(keyWord.toLowerCase())) {
        hasSomeKeyWord = true;
        break;
      }
    }

    return hasSomeKeyWord;
  }

  public Boolean hasPubDateAfterStartAt(Date startAt) {
    if(date == null) { return false; }

    try {
      Date pubDate = formatter.parse(date);
      if(pubDate.compareTo(startAt) >= 0) {
        return true;
      }
      return false;
    } catch (Exception e) {
      return false;
    }
  }

  public Boolean hasPubDateBeforeEndAt(Date endAt) {
    if(date == null) { return false; }

    try {
      Date pubDate = formatter.parse(date);
      if(pubDate.compareTo(endAt) <= 0) {
        return true;
      }
      return false;
    } catch (Exception e) {
      return false;
    }
  }
}