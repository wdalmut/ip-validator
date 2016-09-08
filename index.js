function ip(addr) {
    var ip = addr.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
    if(ip) {
        return (+ip[1]<<24) + (+ip[2]<<16) + (+ip[3]<<8) + (+ip[4]);
    }
    return null;
}

function mask(mask) {
    return -1<<(32-mask);
}

function validate(network, address) {
  var addr = network.split("/");
  return (ip(address) & mask(addr[1])) == ip(addr[0]);
}

module.exports = validate;
