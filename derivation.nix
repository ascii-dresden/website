{ domain, mkPnpmPackage, pkg-config, vips, nodePackages_latest}:

mkPnpmPackage {
    src = ./.;

    installInPlace = true;

    postPatch = ''
      substituteInPlace ascii.config.ts \
        --replace 'ascii.coffee' '${domain}'
    '';

    script = "build";
    
    nativeBuildInputs = [pkg-config vips nodePackages_latest.pnpm];
    buildInputs = [pkg-config vips nodePackages_latest.pnpm];


    installPhase = ''
      mkdir -p $out/bin
      cp -r ./dist/* $out/bin/
    '';
}
