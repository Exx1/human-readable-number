module.exports = function toReadable (number) {
    number = number + ''
    let result = '';
    if (number > 99) {
        if (number[0] === '1') {
            result = result + 'one hundred';
        } else if (number[0] === '2') {
            result = result + 'two hundred';
        } else if (number[0] === '3') {
            result = result + 'three hundred';
        } else if (number[0] === '4') {
            result = result + 'four hundred';
        } else if (number[0] === '5') {
            result = result + 'five hundred';
        } else if (number[0] === '6') {
            result = result + 'six hundred';
        } else if (number[0] === '7') {
            result = result + 'seven hundred';
        } else if (number[0] === '8') {
            result = result + 'eight hundred';
        } else if (number[0] === '9') {
            result = result + 'nine hundred';
        }
        if (number[1] === '0') {
            result = result;
        } else if (number[1] === '1') {
            if (number[2] === '0') {
                result = result + ' ten';
                return result;
            } else if (number[2] === '1') {
                result = result + ' eleven';
                return result;
            } else if (number[2] === '2') {
                result = result + ' twelve';
                return result;
            } else if (number[2] === '3') {
                result = result + ' thirteen';
                return result;
            } else if (number[2] === '4') {
                result = result + ' fourteen';
                return result;
            } else if (number[2] === '5') {
                result = result + ' fifteen';
                return result;
            } else if (number[2] === '6') {
                result = result + ' sixteen';
                return result;
            } else if (number[2] === '7') {
                result = result + ' seventeen';
                return result;
            } else if (number[2] === '8') {
                result = result + ' eighteen';
                return result;
            } else if (number[2] === '9') {
                result = result + ' nineteen';
                return result;
            }
        } else if (number[1] === '2') {
            result = result + ' twenty';
        } else if (number[1] === '3') {
            result = result + ' thirty';
        } else if (number[1] === '4') {
            result = result + ' forty';
        } else if (number[1] === '5') {
            result = result + ' fifty';
        } else if (number[1] === '6') {
            result = result + ' sixty';
        } else if (number[1] === '7') {
            result = result + ' seventy';
        } else if (number[1] === '8') {
            result = result + ' eighty';
        } else if (number[1] === '9') {
            result = result + ' ninety';
        }
        if (number[2] === '1') {
            result = result + ' one';
        } else if (number[2] === '2') {
            result = result + ' two';
        } else if (number[2] === '3') {
            result = result + ' three';
        } else if (number[2] === '4') {
            result = result + ' four';
        } else if (number[2] === '5') {
            result = result + ' five';
        } else if (number[2] === '6') {
            result = result + ' six';
        } else if (number[2] === '7') {
            result = result + ' seven';
        } else if (number[2] === '8') {
            result = result + ' eight';
        } else if (number[2] === '9') {
            result = result + ' nine';
        } else if (number[2] === '0') {
            result = result;
        }
    } else if (number > 9) {
        if (number[0] === '1') {
            if (number[1] === '0') {
                result = result + 'ten';
                return result;
            } else if (number[1] === '1') {
                result = result + 'eleven';
                return result;
            } else if (number[1] === '2') {
                result = result + 'twelve';
                return result;
            } else if (number[1] === '3') {
                result = result + 'thirteen';
                return result;
            } else if (number[1] === '4') {
                result = result + 'fourteen';
                return result;
            } else if (number[1] === '5') {
                result = result + 'fifteen';
                return result;
            } else if (number[1] === '6') {
                result = result + 'sixteen';
                return result;
            } else if (number[1] === '7') {
                result = result + 'seventeen';
                return result;
            } else if (number[1] === '8') {
                result = result + 'eighteen';
                return result;
            } else if (number[1] === '9') {
                result = result + 'nineteen';
                return result;
            }
        } else if (number[0] === '2') {
            result = result + 'twenty';
        } else if (number[0] === '3') {
            result = result + 'thirty';
        } else if (number[0] === '4') {
            result = result + 'forty';
        } else if (number[0] === '5') {
            result = result + 'fifty';
        } else if (number[0] === '6') {
            result = result + 'sixty';
        } else if (number[0] === '7') {
            result = result + 'seventy';
        } else if (number[0] === '8') {
            result = result + 'eighty';
        } else if (number[0] === '9') {
            result = result + 'ninety';
        }
        if (number[1] === '1') {
            result = result + ' one';
        } else if (number[1] === '2') {
            result = result + ' two';
        } else if (number[1] === '3') {
            result = result + ' three';
        } else if (number[1] === '4') {
            result = result + ' four';
        } else if (number[1] === '5') {
            result = result + ' five';
        } else if (number[1] === '6') {
            result = result + ' six';
        } else if (number[1] === '7') {
            result = result + ' seven';
        } else if (number[1] === '8') {
            result = result + ' eight';
        } else if (number[1] === '9') {
            result = result + ' nine';
        } else if (number[1] === '0') {
            result = result;
        }
    } else {
        if (number[0] === '1') {
            result = result + 'one';
        } else if (number[0] === '2') {
            result = result + 'two';
        } else if (number[0] === '3') {
            result = result + 'three';
        } else if (number[0] === '4') {
            result = result + 'four';
        } else if (number[0] === '5') {
            result = result + 'five';
        } else if (number[0] === '6') {
            result = result + 'six';
        } else if (number[0] === '7') {
            result = result + 'seven';
        } else if (number[0] === '8') {
            result = result + 'eight';
        } else if (number[0] === '9') {
            result = result + 'nine';
        } else if (number[0] === '0') {
            result = result + 'zero';
        }
    }
    return result;
}
