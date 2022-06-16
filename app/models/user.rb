class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, length: { maximum: 255 }, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
