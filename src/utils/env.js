/* eslint-disable flowtype/require-valid-file-annotation */

const isBrowser = () => typeof window !== "undefined"

const isProductionBuild = process.env.NODE_ENV === "production"

const cleanHostname = hostname => {
  let tempHostname = hostname.match(/:/) ? hostname.split(":")[0] : hostname

  const parts = tempHostname.split(".")

  if (parts.length >= 3) {
    tempHostname = tempHostname
      .split(".")
      .splice(parts.length - 2)
      .join(".")
  }

  return tempHostname
}

const getHostname = req => {
  if (process.env.HOSTNAME) {
    return cleanHostname(process.env.HOSTNAME)
  }

  if (isBrowser()) {
    return cleanHostname(window.location.hostname)
  }

  if (req) {
    if (!req.headers) {
      throw new Error("Headers missing from `req`")
    }

    return cleanHostname(req.headers.host)
  }

  throw new Error("Missing param `req`")
}

const getProtocol = () => {
  if (isBrowser()) {
    return window.location.protocol
  }

  throw new Error("Can only be called from a browser")
}

module.exports = {
  isBrowser,
  getHostname,
  getProtocol,
  cleanHostname,
  isProductionBuild
}
