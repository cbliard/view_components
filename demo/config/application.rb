# frozen_string_literal: true

require_relative "boot"

require "action_controller/railtie"
require "action_view/railtie"
require "active_model/railtie"
require "sprockets/railtie"
require "view_component"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Demo
  # :nocov:
  class Application < Rails::Application
    if Rails.version.to_i >= 7
      config.load_defaults 7.0
    elsif Rails.version.to_i >= 6
      config.load_defaults 6.0
    end

    config.action_dispatch.default_headers.clear

    config.action_dispatch.default_headers = {
      "Access-Control-Allow-Origin" => "*",
      "Access-Control-Request-Method" => %w[GET].join(",")
    }
  end
end
