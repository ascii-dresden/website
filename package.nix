{ deno, stdenv }:

stdenv.mkDerivation {
  pname = "ascii-website";
  version = "0.1.0";

  nativeBuildInputs = [ deno ];

  buildPhase = ''
    runHook preBuild
    deno task build
    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall
    mkdir -p $out
    cp -r ./dist/* $out
    runHook postInstall
  '';
}
