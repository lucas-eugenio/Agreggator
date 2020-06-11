package com.aggregator.model;

public class News {
  private final String title;
  private final String link;
  private final String date;

  public News(String title, String link, String date) {
    this.title = title;
    this.link = link;
    this.date = date;
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

  @Override
  public String toString() {
    return "--------------------\n" +
      "Title: " + title + ".\n" + 
      "Link: " + link + ".\n" + 
      "Date: " + date + ".\n" +
      "--------------------\n";
  }
}