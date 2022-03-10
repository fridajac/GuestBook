import json

class PostItem:
  def __init__(self, name, text):
    self.name = name
    self.text = text

  def serialize(self):
    return {
      'name': self.name,
      'text': self.text,
    }
