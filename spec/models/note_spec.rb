
require 'rails_helper'

RSpec.describe Note, :type => :model do

    subject { described_class.new(body: 'a body', title: 'a title', date: '01/03/2019') }

    describe 'creating a note' do
        it 'is valid with valid attributes' do
            expect(subject).to be_valid
        end 
    end 
end 