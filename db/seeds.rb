def create_room(name, image_name)
  Room.create!(name: name, image_name: image_name)
end

create_room("Classic", "classic.jpg")
create_room("Piano", "piano.jpg")
create_room("Trance", "trance.jpg")
