import json
from api.post_item import PostItem

class PostItemRepository:

  post_items = []

  def add_post(self, post):
    self.post_items.append(post)
    return post
  
  def get_posts(self):
    return self.post_items