import "react";

/**
 * @see https://github.com/zeit/styled-jsx/issues/90
 */
declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
