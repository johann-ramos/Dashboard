require "mongo_mapper"

class Detalle 
  include Mongoid::Document
  include MongoMapper::Document
  field :jobName, type: String
  field :buildNumber, type: Integer
  field :output, type: String
  field :ejecutor, type: String
  field :fecha, type: Date
  field :tiendas, type: String
  field :status, type: String
  field :pos, type: String

    scope :duplicateEliminate,   where(:jobName => 'DDLL')


end
