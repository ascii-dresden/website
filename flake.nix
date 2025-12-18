{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        package = pkgs.callPackage ./package.nix;
      in
      rec {
        checks = packages;
        packages = {
          ascii-coffee-website = package;
          default = package;
        };
        devShells = {
          default = pkgs.mkShell {
            name = "ascii-website";
            packages = [
              pkgs.deno
              pkgs.biome
            ];
          };
        };
      }
    )
    // {
      overlays.default = final: prev: {
        inherit (self.packages.${prev.system})
          ascii-coffee-website
          ;
      };
    };
}
