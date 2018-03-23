class TweetsController < ApplicationController

def index
  render json: {status: 200, tweets: Tweet.all}
end

def show
  found_tweet = Tweet.find(params[:id])
  render json: {status: 200, tweet: found_tweet}
end

def create
  tweet = Tweet.new(tweet_params)

  if tweet.save
    render json: {status: 200, tweet: tweet}
  else
    render json: {status: 422, tweet: tweet.errors}
  end
end

def update
  tweet = Tweet.find(params[:id])

  tweet.update(tweet_params)

  render json: {status: 200, tweet: tweet}
end

def destroy
  tweet = Tweet.destroy(params[:id])
  render json: {status: 204}
end

private

def tweet_params
  params.require(:tweet).permit(:title, :content, :author)
end

end
