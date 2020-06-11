package com.aggregator.utils;

import com.aggregator.model.Feed;
import com.aggregator.model.News;

public class FeedReaderTest {
  public static void main(String[] args) {
    Feed feed = new FeedReader("https://www.wired.com/category/science/feed").getFeed();
    for (News news : feed.getItems()) {
      System.out.println(news);
    }
  }
}