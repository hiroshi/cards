class Card
  include Mongoid::Document
  include Mongoid::Timestamps
  field :content, type: String
end
