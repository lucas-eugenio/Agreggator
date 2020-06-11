package com.aggregator.service;

import java.util.ArrayList;
import java.util.List;

import com.aggregator.model.Feed;
import com.aggregator.utils.FeedReader;

import org.springframework.stereotype.Service;

@Service
public class FeedsService {
  public List<Feed> findAll(List<String> urls) {
    List<Feed> feeds = new ArrayList<Feed>();
    for(String url : urls) {
      Feed feed = new FeedReader(url).getFeed();
      feeds.add(feed);
    }
    return feeds;
  }
}