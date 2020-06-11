package com.aggregator.model;

import java.util.ArrayList;
import java.util.List;

public class Feed {
  private final String title;
  private final List<News> items = new ArrayList<News>();

  public Feed(String title) {
    this.title = title;
  }

  public List<News> getItems() {
    return items;
  }

  public String getTitle() {
    return title;
  }

  public void addItem(News item) {
    this.items.add(item);
  }
}