import json
from PostItem import PostItem

class PostItemRepository:

  postItems = []

  def addPost(self, post):
    self.postItems.append(post)
    return post
  
  def getPosts(self):
    return self.postItems