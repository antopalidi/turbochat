class Message < ApplicationRecord
  belongs_to :user
  belongs_to :room

  has_many :likes

  scope :sorted, -> { order(:id) }

  validates :body, presence: true, max_length: 255
end
