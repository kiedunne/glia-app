class NotesController < ApplicationController

    def index
        
    end 
    
    def new
        @note = Note.new
    end 

    def create 
        @note = Note.new(note_params)
        if @note.save?
            redirect_to @note
        else
            render 'new'
        end 
    end 

    private

    def note_params 
        params.require(:notes).permit(:body, :title, :date)
    end 
end
