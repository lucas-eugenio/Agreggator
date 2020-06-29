package com.aggregator.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

public class Feed {
  private final String title;
  private List<News> items = new ArrayList<News>();
  private Boolean hasError = false;

  public Feed(String title) {
    this.title = title;
  }

  public List<News> getItems() {
    return items;
  }

  public String getTitle() {
    return title;
  }

  public Boolean getHasError() {
    return hasError;
  }

  public void addItem(News item) {
    this.items.add(item);
  }

  public void setHasError() {
    this.hasError = true;
  }

  public void filterWithKeywords(List<String> keyWords) {
    List<Integer> indexesToRemove = new ArrayList<Integer>();
    for(int i = 0; i < items.size(); i++) {
      if (!items.get(i).hasKeyWords(keyWords)) {
        indexesToRemove.add(i);
      }
    }
    removeFromItems(indexesToRemove);
  }

  public void filterByStartAt(Date startAt) {
    List<Integer> indexesToRemove = new ArrayList<Integer>();
    for(int i = 0; i < items.size(); i++) {
      if (!items.get(i).hasPubDateAfterStartAt(startAt)) {
        indexesToRemove.add(i);
      }
    }
    removeFromItems(indexesToRemove);
  }

  public void filterByEndAt(Date endAt) {
    List<Integer> indexesToRemove = new ArrayList<Integer>();
    for(int i = 0; i < items.size(); i++) {
      if (!items.get(i).hasPubDateBeforeEndAt(endAt)) {
        indexesToRemove.add(i);
      }
    }
    removeFromItems(indexesToRemove);
  }

  private void removeFromItems(List<Integer> indexesToRemove) {
    indexesToRemove.sort(Collections.reverseOrder());
    for(int index : indexesToRemove) {
      this.items.remove(index);
    }
  }
}