# -*- encoding: utf-8 -*-
from dashing.widgets import NumberWidget
from dashing.widgets import Widget
from random import randint
import pymongo
from pymongo import MongoClient
import pprint

users = randint(50, 100)
newNumber = 1000

class NewClientsWidget(NumberWidget):
    title = 'New Users'

    def get_value(self):
        global users
        users += 1
        return users

    def get_detail(self):
        global users
        return '{} actives'.format(users/3)

    def get_more_info(self):
        global users
        return '{} fakes'.format(users/10)

class NewNumberWidget(NumberWidget):
    title = 'New Number'

    def get_value(self):
        return newNumber+randint(50, 100)


class MongoWidget(NumberWidget):
    global collection
    client = MongoClient('mongodb://aiastro1:tester01@ds111788.mlab.com:11788/aiastro')
    db = client['aiastro']
    collection = db['astro']

    def get_value(self):
        star = collection.find_one({"type": "Star"})
        name = star['name']
        location = star['location']
        # pprint.pprint(star)
        return 1

class TextWidget(Widget):
    title = 'Title'
    more_info = 'more-info'
    updated_at = ''
    text = 'Text'
    pprint.pprint("Test1")

    def get_title(self):
        pprint.pprint("Test2")
        return self.title

    def get_more_info(self):
        return self.more_info

    def get_updated_at(self):
        return self.updated_at

    def get_text(self):
        return self.text

    def get_value(self):
        pprint.pprint("Test")
        return {
            'title': 'Title',
            'moreInfo': 'more-info',
            'text': 'Text',
        }
