
require 'rails_helper'

RSpec.describe Note, :type => :model do

    subject { described_class.new(body: 'a body', title: 'a title', date: '01/03/2019') }

    describe 'creating a note' do
        it 'is valid with valid attributes' do
            expect(subject).to be_valid
        end 

        it "is not valid without a title" do
            subject.title = nil
            expect(subject).to_not be_valid
          end
        
          it "is not valid without a body" do
            subject.body = nil
            expect(subject).to_not be_valid
          end
        
          it "is not valid without a date" do
            subject.date = nil
            expect(subject).to_not be_valid
          end
    end 
end 