class CreateResultados < ActiveRecord::Migration[5.2]
  def change
    create_table :resultados do |t|
      t.string :jobName
      t.integer :buildNumber
      t.string :output
      t.string :ejecutor
      t.string :hora
      t.date :fecha

      t.timestamps
    end
  end
end
