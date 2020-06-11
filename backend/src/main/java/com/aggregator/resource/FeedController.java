package com.aggregator.resource;

import java.util.List;

import com.aggregator.model.Feed;
import com.aggregator.model.Input;
import com.aggregator.service.FeedsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class FeedController {

  @Autowired
  private FeedsService FeedsService;

  @RequestMapping("/feed")
  public List<Feed> getFeedsFromList(@Validated @RequestBody Input feedList) {
    return FeedsService.findAll(feedList.getUrls());
  }
}