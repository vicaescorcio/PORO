class Project < ActiveRecord::Base
	mount_uploaders :avatars, AvatarUploader
  serialize :avatars, JSON
end
