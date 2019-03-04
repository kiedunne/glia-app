class Api::V1::NotesController < ApplicationController
    
    def index
        render json: Note.all
      end
    
      def create
        note = Note.create(note_params)
        render json: note
      end
    
      def destroy
        Note.destroy(params[:id])
      end
    
      def update
        note = Note.find(params[:id])
        note.update_attributes(note_params)
        render json: note
      end
    
      private
    
      def note_params
        params.require(:note).permit(:id, :title, :description)
      end
    end
