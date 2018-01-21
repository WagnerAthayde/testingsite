class PagesController < ApplicationController

	def index

		@title = 'About us'
		@content = 'This is the landing page'
		
	end

	def contact
		@title = 'Contact us'	
	end

	def create
		contact = Contact.new(contact_params)
		if contact.save	
			redirect_to home_path
		else
			flash[:errors] = contact.errors.full_messages
			redirect_to contact_path
		end
	end

	private
	def contact_params
		params.require(:contact).permit(:full_name, :email)
		
	end
end
