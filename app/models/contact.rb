class Contact < ApplicationRecord
	validates :full_name, presence: true
    validates_format_of :email, :with => /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/
    validates :email, uniqueness: true
end
