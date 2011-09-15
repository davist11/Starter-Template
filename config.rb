require 'ruby-growl'

#paths 
http_path = "/"
css_dir = "stylesheets/"
sass_dir = "compile/sass"
images_dir = "images/structure/"
javascripts_dir = "scripts"

# settings
output_style = :compressed
relative_assets = true
line_comments = true

on_sprite_saved do |filename|

  unless filename.match('transparent')
    png8filename = filename.sub(/\.png/, '-fs8.png')
    %x{compile/pngquant/pngquant #{filename}}
    %x{mv -f #{png8filename} #{filename}}
  end
  
  puts filename
  
  %x{open -a ImageOptim.app #{filename}}

  g = Growl.new "localhost", "ruby-growl",
    ["ruby-growl Notification"]
  g.notify "ruby-growl Notification", "Compass sprite generation",
    "Your sprite is done:" + filename 

end

