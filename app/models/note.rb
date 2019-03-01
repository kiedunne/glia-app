class Note < ApplicationRecord
    validates :body, presence: true, length: { minimum: 3 }
    validates :title, presence: true, length: { minimum: 3 }
    validates :date, presence: true
end
