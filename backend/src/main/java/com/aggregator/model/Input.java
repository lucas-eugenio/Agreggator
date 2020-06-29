package com.aggregator.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Input {
  List<String> urls = new ArrayList<String>();
  List<String> keyWords = new ArrayList<String>();
  Date startAt;
  Date endAt;

  public List<String> getUrls() {
    return urls;
  }

  public List<String> getKeyWords() {
    return keyWords;
  }

  public Date getStartAt() {
    return startAt;
  }

  public Date getEndAt() {
    return endAt;
  }

  public Boolean hasKeyWorlds() {
    return keyWords.size() > 0;
  }

  public Boolean hasStartAt() {
    return startAt != null;
  }

  public Boolean hasEndAt() {
    return endAt != null;
  }
}