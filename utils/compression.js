import zlib from "zlib";
const compressionMiddleware = (req, res, next) => {
  const originalSend = res.send;

  res.send = function (data) {
    if (req.acceptsEncodings("gzip")) {
      const originalSize = Buffer.from(JSON.stringify(data)).length;
      const compressedData = zlib.gzipSync(JSON.stringify(data));

      // Set the appropriate headers for gzip compression
      res.setHeader("Content-Encoding", "gzip");
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Content-Length", compressedData.length);

      // Calculate the compression percentage
      const compressionPercentage =
        ((originalSize - compressedData.length) / originalSize) * 100;
      console.log(
        `Compression Percentage: ${compressionPercentage.toFixed(2)}%`
      );

      // Send the compressed data
      res.end(compressedData);
    } else {
      // If the client does not support compression, send the response as JSON
      originalSend.call(res, data);
    }
  };
  next();
};

export default compressionMiddleware;
