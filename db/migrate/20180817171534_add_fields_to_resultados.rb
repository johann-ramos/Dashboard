class AddFieldsToResultados < ActiveRecord::Migration[5.2]
  def change
    add_column :resultados, :tiendas, :string
    add_column :resultados, :status, :string
    add_column :resultados, :pos, :string
  end
end
