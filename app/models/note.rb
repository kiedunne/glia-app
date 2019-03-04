class Note < ApplicationRecord
    validates :description, presence: true, length: { minimum: 3 }
    validates :title, presence: true, length: { minimum: 3 }
    validates :date, presence: true
end
