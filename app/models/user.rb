# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email_address   :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :fname, :lname, :email_address, :password_digest, :session_token, presence: true
  validates :email_address, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :reservations,
    foreign_key: :user_id,
    class_name: :Reservation

  has_many :reviews,
    through: :reservations,
    source: :review

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email_address, password)
    user = User.find_by(email_address: email_address)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
