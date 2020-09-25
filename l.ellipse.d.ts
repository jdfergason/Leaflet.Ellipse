import * as L from 'leaflet'

declare module 'leaflet' {

  /**
   * Creates an ellipse.
   * @param latlng The position of the center of the ellipse.
   * @param radii The semi-major and semi-minor axis in meters
   * @param tilt The rotation of the ellipse in degrees from west
   * @param options Options dictionary to pass to L.Path
   */
  function ellipse(latlng: number[], radii: number[], tilt: number, options: EllipseOptions): Path.Ellipse;

  interface EllipseOptions extends L.PathOptions {
    fill: boolean;
    startAngle: number;
    endAngle: number;
  }

  namespace Path {
    class Ellipse extends L.Path {
      constructor(options?: EllipseOptions)

      setRadius(radii: number[]): this
      getRadius(): L.Point
      setTilt(tilt: number): this
      getBounds(): L.LatLngBounds
    }

  }
}
