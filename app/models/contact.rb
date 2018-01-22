class Contact < ApplicationRecord
    validates_format_of :email, :with => /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/
    validates :email, uniqueness: true
end
