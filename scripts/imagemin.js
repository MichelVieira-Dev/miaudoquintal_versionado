import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";

const files = await imagemin(["assets/images/*.png"], {
  destination: "dist/assets/images",
  plugins: [
    imageminPngquant({
      quality: [0.6, 0.8],
    }),
  ],
});

console.log("Imagens otimizadas:", files);
