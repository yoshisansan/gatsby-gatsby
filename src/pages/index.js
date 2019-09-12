import React from "react";
import Post from '../components/Post';
import PrimaryLayout from '../layouts/PrimaryLayout';

export default () => (
  <PrimaryLayout column="col-xs-6">
            <Post title="This is our first post" excerpt="We are writing something to be hogehoge"/>
            <Post title="This is our first post" excerpt="We are writing something to be hogehoge"/>
            <Post title="This is our first post" excerpt="We are writing something to be hogehoge"/>
            <Post title="This is our first post" excerpt="We are writing something to be hogehoge"/>
  </PrimaryLayout>
);