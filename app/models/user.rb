class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, length: { maximum: 255 }, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  has_many :rooms, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :likes, dependent: :destroy
end
