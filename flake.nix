{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    pnpm2nix = {
      url = "github:nzbr/pnpm2nix-nzbr";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.flake-utils.follows = "flake-utils";
    };

    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, pnpm2nix, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          package-ascii-coffee = pkgs.callPackage ./derivation.nix {
            domain = "ascii.coffee";
            mkPnpmPackage = pnpm2nix.packages."${system}".mkPnpmPackage;
          };
        in
        rec {
          checks = packages;
          packages = {
            ascii-coffee-website = package-ascii-coffee;
            default = package-ascii-coffee;
          };
        }
      ) // {
      overlays.default = final: prev: {
        inherit (self.packages.${prev.system})
          ascii-coffee-website;
      };
    };
}
