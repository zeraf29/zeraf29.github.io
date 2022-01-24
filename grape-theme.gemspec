# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "grape-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["zeraf29"]
  spec.email         = ["zeraf29@gmail.com"]

  spec.summary       = "A free and open-source Jekyll theme. Great for blogs and easy to customize."
  spec.homepage      = "https://zeraf29.github.io/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.0"
end
