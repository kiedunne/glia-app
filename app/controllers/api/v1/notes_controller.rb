class Api::V1::NotesController < ApplicationController

    def index
      render json:Note.all  
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

    def destroy
        Note.destroy(params[:id])
      end
    
      def update
        @note = Note.find(params[:id])
        @note.update_attributes(note_params)
        render json: note
      end

    private

    def note_params 
        params.require(:notes).permit(:body, :title, :date)
    end 
end
