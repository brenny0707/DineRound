json.array! @reviews do |review|
  json.partial! '/api/reviews/review', review: review
end
