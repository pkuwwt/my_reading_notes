#-*- coding: utf-8 -*-

import sys
import re
import string
import unicodedata

def is_control_char(c):
    return unicodedata.category(c) == 'Cc'

def is_character(c):
    return c not in string.whitespace and not is_control_char(c)

def count_character(s):
    return len([i for i in filter(is_character, s)])

cjk_ranges = [
        ( 0x4E00,  0x62FF),
        ( 0x6300,  0x77FF),
        ( 0x7800,  0x8CFF),
        ( 0x8D00,  0x9FCC),
        ( 0x3400,  0x4DB5),
        (0x20000, 0x215FF),
        (0x21600, 0x230FF),
        (0x23100, 0x245FF),
        (0x24600, 0x260FF),
        (0x26100, 0x275FF),
        (0x27600, 0x290FF),
        (0x29100, 0x2A6DF),
        (0x2A700, 0x2B734),
        (0x2B740, 0x2B81D),
        (0x2B820, 0x2CEAF),
        (0x2CEB0, 0x2EBEF),
        (0x2F800, 0x2FA1F)
    ]
def is_cjk(char):
    char = ord(char)
    for bottom, top in cjk_ranges:
        if char >= bottom and char <= top:
            return True
    return False

def contain_cjk(s):
    return any(map(is_cjk, s))

def count_cjk(s):
    return len([i for i in filter(is_cjk, s)])

def count_in_file(count_func, filename):
    with open(filename) as f:
        return count_func(f.read())

def is_ascii(c):
    return ord(c) < 128
def count_ascii(s):
    return len([i for i in filter(is_ascii, s)])

def is_alphanumeric(c):
    code = ord(c)
    return (97 <= code <= 122) or (65 <= code <= 90) or (48 <= code <= 57)
def count_alphanumeric(s):
    return len([i for i in filter(is_alphanumeric, s)])

def is_alpha(c):
    code = ord(c)
    return (97 <= code <= 122) or (65 <= code <= 90)
def count_alpha(s):
    return len([i for i in filter(is_alpha, s)])

def is_numeric(c):
    code = ord(c)
    return (48 <= code <= 57)
def count_numeric(s):
    return len([i for i in filter(is_numeric, s)])

def main():
    if len(sys.argv) == 1:
        print('Usage: {} input.txt'.format(sys.argv[0]))
        return
    with open(sys.argv[1]) as f:
        print('========== Statistics for {} ========'.format(sys.argv[1]))
        s = f.read()
        print('Character count:', count_character(s))
        print('CJK count:', count_cjk(s))

if __name__ == '__main__':
    main()

