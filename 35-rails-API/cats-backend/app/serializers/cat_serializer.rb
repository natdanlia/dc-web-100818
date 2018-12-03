class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :age, :quote, :image
  has_many :hobbies
end
