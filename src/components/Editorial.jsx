import React from "react";
import { COLLABS, FUNDERS, LAB, PILLARS, Placeholder, PortraitPH, SciGlyph } from "../data/shared.jsx";
import { TEAM_PHOTOS } from "../data/team-photos.js";
import { NEWS_IMAGES } from "../data/news-images.js";

const BG = "#f7f4ef";
const BG2 = "#f0ece4";
const BG3 = "#e8e2d8";
const INK = "#1a1814";
const WP = "#4F2683"; // Western Purple
const WO = "#8F55E0"; // Orchid
const WD = "#201436"; // Deep
const WG = "#818284";
const RULE = "#ddd8ce";
const MUTED = "#6b6459";

const DISPLAY = "'Playfair Display', Georgia, serif";
const SANS = "'Inter Tight', system-ui, sans-serif";
const MONO = "'JetBrains Mono', Menlo, monospace";

const MARK_SRC = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAQAElEQVR4AezdB5g0TVUv8PkAvQKCmCMgigERFCRLkCBJMkhUkgLqvaAYiA8q6r1gIoggUZQcJINkBSQjQUBEUVAEJRhBAQX87v/XbC218/bMTvd098zsO/vU2equrnAqnKpzTp2qOcts/7dvgX0LLGyBPYEsbJr9h30LzGZ7AtmPgn0LLGmBPYEsaZz9p30L7AlkPwb2LbCkBUYkkCWl7j/tW2BHWmBPIDvSUXs0N9MCewLZTLvvS92RFtgTyI501B7NzbTAnkA20+77UnekBXaTQHakcfdo7n4L7Alk4D4888wzvyBw9sAXB7488HWBbwh8c+DygSsdwC3iF7henkv4JfJ8vsDXB742cJ7AOQNfFNj318D9dVx2+wY/roWO+Z5B+yWBbwwY/N+f6DcM3CLwQ4HbBe4YuFPgDoEbBK57AJeOX+D78lzCb5pn8YG0t8n7LQM3C1w35Xxf4OIBxINozkj43o3UAnsC6diwGZjnCFwocIPA/0nynwoYyAb/tfJ82cBFA98e+IbAeQLnCnxR4GwV5PHQ6Yfy7QsTes7AuQNfGrhA4MKBiwUKId08z8r+6fh3Ch7fH7BSySNBezdUC+iYofI6cflk0J0tYIXA8pi5zer3TkX5BusF82wQnyO+wak9l83o/5N4nz6AT8X/ROCTgf8OlPAz87zIyfus+ViI6KvyjBB/IP7PBO4VfLFt3xMfwWDN4JRPe9enBfaNN9dqGVhnBL4scLl8ul7gtoEfD1w/cKGA2T3eQmew/0O+vifwpsArAy8IPC/w7MAzDuBp8Z8SeHLg6YESLs7z8/6iwOsCbw/I66PxPxNY5BDOl+Ujtu1W8REx/xqpixXvOLyTZO/mW2BPIActkkFktcDOkBv+d4LJEleIL+zs8c3e8U5x/5oQhPD4+L8WuH/gdwKPDRj4CONlZ5xxxssDrwq8/gDeEv/tB/Cm+CX8lXl+WdK+OPDMwJMC8npI/PsFfiPg21vj/0egzenXL8mH7wiQi24d/y6p4zUDX5nnvVuxBTTkilFPXrQMlrMGaInMuj+SGt45QH748vhfEKiJwsrwbwl7f8Cq8Jj4d8tgvm/giYE3B/4h8C+Bjwc+EfjvwGcCy9imZHOqkybw6cCnAvL6WPx/Dnwg8MLA7yfVfQK/FHhq4B2BDwc+HvhsoDh9jMC/OgHXDNw9db5l4IIB8pTvCd67thY4LRsnAwNhfFMa5NoBhEFDhH2abw9ywQcT5zUBs/mj4/92BuezAu8IIJoEbcal/DMDCPJ18RHsg4PJ4wJWrTfHx5bFO+LISpdKCK0a7Rjt21emTerJIJ/3TgvMDwhhJxoyEL4uFcRGgSvn+byB+XYgPL824diaR8Z/dgYgFsjsvVGiCC4LXXC00rwn/isSiYzzsPgPDWDH4h1x/ytv3xmgXiZjUSFbaRK0d6UF5gdGCT9RfoiCfGHT7sap2E8GDAyq17r++Pm/yTdC8i9mkD0t8P7AvwesJPm0lps0cXD+r8C/BhAMduxuQcDKgg2jQctr47CShPur5O0eaavLBM4V2K8oaZB6gOT15Ll0NKHU/sRdUjtCt5kzj4eOxulP8mYQPSID6hWBrV0lgmcvp06BlyfxbwfILFaVf8lz7Qj2P5gAm5MNoeT5tHYnlkBCGF8YoMH5sfQwVkrn5/HQ4c/NqI9KyHMyeMy0J44wUrcjLvWkQEAcWDDsI/mqjkNdbH+HFu9H0oYXCZzYcVJXvO35xFU8nckWigD+c6mwDTQaqVJPG3X/nvDnBh6YwUL1ig1Ztr+QqCfPpe6fDHwoQBX9i6nh6wM0YEXjZjPyGxNGiXHztOuXBhBPgk4fVwbOiahxOlCH2tC7fSqEtYp36D6Up5cGHpxB8UcBgnhe9y5tQX2N7bKaWlE+Ntcql8w7cxoGlWS3vJ4e7kQQSAjD7rdOtCH2vem6Lw4UZ0a0K00N+uIMhnm+u8TbYX991NMuVMb2eJ6T3B4esK8Sr3EE9q/NE1nuNmnvr8jzaeF2mkDSUQiDatI+BqCN0Zk6D9tEAL9/Ov9FgY8GsFi+7WFBC6SNbE5qN0oL5i8120XjRT65a9r+YgHvC3I6GcE7TSDpApt72KnL5NkGWLzGUWX+YZ4emg73nMe969ICaTcWALR7v5l0bMIYVeaxcey6mPRfP0TCYLIJPIn/dpJA0ik0VFS2OsmMVvfNO/PCdolN03/mee/WaIEQCvkE2/V7yYYcF69xhHjs7A+nP765CTmB/3aOQNIZ9jGYiFBDEhgLS/Vf6R/q2kenU2lnanukfNq7vi2Q9rTp+JdJb2feBIR9zetM27NE+PH0C5OVE6fl2hkCSQeQNwiK1I7OYtS4/3V6ixDOxCKPezdYC1QZhVBot7Qzc/x/rj5hb5msXD395GxM9Wm3H+tBtu01+ZogSEv1LfGLs0r8UV4en877qwCNVV73bqwWOGjjVyV/RpHvjV+clf2qeblZiMQhsjzuvtt6AkljWzkukaZmQ2UFsazndcY+ym7w89JpNv+E7WGCFkh7/0/g7wK/leIc6CraQSvJdyXstuk32sU87rbbagJJI8PPWWznvZ3pLq1NM/W4dNAbAvtVo7TKZvwnplg2XrWW6/wJu0P677wBfZjX3XRbi3walpaEpoowXm/8/V2aWqcQFvO4d5tsgUxQlCM2Ypms1Cs5cx9aRsSySRTXKnsrCSTEgY1CHM6E01SVSv55HhxYYoa+XznSGNvgQiSfDbwluNhcLBquvM6cvblj+tNpRu9HYBdeto5A0ph2Z6+YxmPWUNSGhHHE4SQf2SOf927bWiBEQminCnYKs6BHFrld+nUnV5KtIpA0Inzsil8nrUvgizczIzkD/qR0wD8J2MNWt8D7gp3bWmqbNysIi2BKlnzeHWdAbhO2dmRZ41pFCl5kDZcU7HfFS4tssZ9JjNHj3wfFBwacuYnXbCgijp/IJLhTho5bQSBptLMELpKWZFJdVg5slYM9T06j79mqNM4uufQZI0dXIf1jhTd58qbpa34VvL2PW0EgaR4rx43i1yvHu/JO5qAlyePe7VoLhEiYzz8heFtR4jXORq/NRAaPTcAI/wbLcuMEktmEiTrzkXr39SOpIZmDaUMe925XWyBEQmCnlmf0qBo0lC7NuFH6vp4Qfds62CiBpIEstXTlZROQ6paQR5VbbzxtXcPtEerUAjZ22W/VffrdycGl2wgmj9vpNkogaZKrB2woxWscoe4ZmXX2K0fTHCfjX/rTxOciO2bzhWWmwneZBtOUra3oxggkqweTdecJ4KABzS6PTWN+YGtba4/Y0hZIn1K2HFo95N19ZM0KkX7Vx29MBn8c8BxvhsXCap3PyzaCwTkpXmk0xofflkJZfmo8jWVWeW4a8VDjkXh+HOYH439XwGyTJLvhgi/cXVTnh3XcrH6FhKmLnyZgo3S3vN878IDAgwL3D9wzIPz28e0Z+NWp783ztwXYNMmPxexWNUJwc4tMGUcOr90wYa52ZSp0kyDbCOMJO3v6l1Ejuy2bvvnUOL+D4mTi1tUNdqVinj8H4//XYFaPetC/IcVS6cY7dJfP0/cE2GLRfORxe10GwLkD3x2gjXPnrcvXKB/cgSvMaumSbD+GwwTDrSul/clgNtOEuzzbZqmbDg0w6R0rZuqPwH4gZVw0MH/P16Yax4Ep+CpfnRyD1nf2s6wMVhG4ssiehUio7Flhs6mTBrhB3w8SaQfvWwOlg6ZEyPWfGq6U6bcvrB6H12Gm8y+ej1cLmFU07k0S5jlB2+OCE5bikvFdTnePYOZn19iQGeTqSAlR2ti1ps54m0EBzY5jrAX8Tohw4F5g2h8rrH0hGj6mGgRb7YJY3NLOhMNPHKTojTmX7V0tbeA4AtyYljg8hWgQvV/Dcvfv4dn1EAkZ02XgfIhrIxdq02553xqA2CTIpAENJjML83Udr1xC+VPTYDYFZ4mD/bJaIKKaIKiCsSaH/K3Em4Dg6Mc5zx/fFZ1+esBq4VeeDAz3+9L5OyPxrODn+px7pH53DTwkQAHh/ArwmyBvS1gBpvvCgXuBfz3f/LzbLycfp/hcQoE1cS4cS+rkHgFXu9wn+DjNh6UTniTjuZSFhcL26Rccgf4DpV/9ZgqzIOPrW4MJQnGPgF/r+pqkP2fqZgVx8MqKkigzHIUf+zEhet8KUIGpENGYjBDr8vxQTNGPC9e57LAMNu8FNLxl+CppXA1ZwifzU+5XBMyKCMKvN2GZECwTbz+gw9zbzvEj0/m/G3BpxLvjH66MfZBNer8J4qcWXpJnF7shFj+q45Ltv0qeiMXtkYw74eW3Py4bXOfbMFEHdSYyKyZWyqTgZKdJgZKFWldb6Ft9p2CWEuJjr8vkx8bOjSm+Aywa2WtrWK0pCUTDaAANATSOH50huHkHzNv98GVpVGEF4GpQuj2xhE3iZ7BdKQX50UwyAZYGIVMouD3Fr0qZ8V+bAfw3AatIoo/jkv8/Bawk2g+x/GpKemHATZGIAptiBXaRQsP359ugLuVbLVxV+vXJmI2VdxOXdkIYVlAX+WEXE6VxcCPENz8yJCT5WD1otbCTggD2muzpeeNg0I2KRAYXtkmFL56CysB3MRlWQsMW1gq7oFGX4UQz4mY/M2ayG88Fb6wUDZqfDXCi8TwpzSB07sHNKb+aDv6zgN/k0NH5PJ1LuYwC3TbibmE/yfYLKf0PAn8bgA8Z6Fapx50DFwhQqebTei75nDOAMKzoiEKGCFHfuMjBLfr6B5GI4ztCocb37Md6vj55WJHPmnpgx3AScPbdGHHFKbbM+0Zh2WAcCjHCmUukS36EOleAMmMvYfhOWhuNU8IW+QRf/LYOWRSnd3g6DkHjm7FSfgSTZgnOWAGzIxMYFsa9yxgjYQaai95enbzJPQR+V4eagNi5+SHSG6duZKdV2jjZLHRWAn2lfRDIuxMTm4c1pnBxupCiwoprNcjnmb56SR5MMCZC2j2q/jL+4GqPJFEax+KXvNq8bPJfQXBMHKwKtDCljLflYX6AaUisVT6t5GiJxpph/I6fAYWVMgAQBjbqmRmEfiKhJuyVkJ0yUnD0m4Zmb0aCfgvEISYTEBWzX9UiR/VGKfkTvt2Oj8UErid9QDJkmEglj2WuWaZ8mvnFYG35p3nhYwnfmLyaVSO+NqWEILgnysy4JEdhF71vDCAyWuGZsXQM9V2ZtSzBLHTNbE25iWOjCO/aBRdCnLuxmjzW/RccrBpmV6pK5i/YEWwgVewfpAMJyk1nrlvWVOmDM/YLu2VFYeJhYOsPlrQ2I12j1BmdtJUBTsjWX+QtK4F9HqynW070MRbLaqH9EIw0VpiipDmlLYOv8z4mozI2qLevlfLg3BnPoRKo5FB5HcknFTOIfziBCCBec02P3+MovKgwYDnGNnnuAn7YBfvTJc0pcYOnjiD807DgmZ1jwNMzmPRTzaXDTkm7CwEZeH5plyD8iOCLjVEfKzBZzgXUcYMQ/gAAEABJREFUBm8+He/SVsaLWf2miW1fhh0d7RR5R/v5+Wx7QjgGP6Ogf6RJ9COOitxPUlMR1x+wWi4BLGG4BBuP5X1yvw35oZDAa+J/S370939WXvhpcMRjZ7msMIJXBQO7sAurpmmLp7Noz2jYLPE0Q3+cgWUGbIu/k2GpjxUEO0TzZramfTLQmfysVKfkYTUwgOXD6hpx6ePfTQbYOt8QYV5n9jgQomfmRMAzdorQTl46ogJP/vCSt0lKXH2M5fW8ERiFQDLwrR7kijLwNayfINAAdUVphsosouGsLgTiOs6iZ3nTpiz6vjA8+GGp/GKSFQ4LqKPtZTwmneRCNLPswvS7+iF1s5qQ/8gmBjhWCRvDUqH0w9LqJQ99aLKT3qC32ev8jvRUv5QyBHcEiNUSxw8XWR3kTT6hEqd9O6Wdk7+8sFrSiX+e9Nc1PGwCRiGQVMTOMnYlj417ZypOd9+8VP/sJ+D3BWlUm202nE5pOBFaoC/+VgssAfUzcwcsFVnDc0sxJysofUG4tpJgg0xIWEzGlKvy+9gerJWGsRlogrFp6qIGbWtTmNmJ7yZHxFRWC8oYG76l38WZB8I89W8Jp/ZFcOV9Mr/vAFuIYKjdrERoo9oTT0VpKDzPg8YrM8VH0nEMFs0e2JsSPp9mrffgZ9Vh/Id/pp50A8fLUrbntfLepcSpr8nAj5jqG6sxdsiPdmJ7j6sKgiCAU+laMeymCzOx6XdhVOWEeCpnY4Cc4h0LhVNYJndalazoBQ8TKa3W4OO1FLDIH7TADD4NTS6oG9m1+SrchgMzjTIw2fac5aDjrCIasS1NHYaQ6velz8HPLjzioMHRaXahrVz5dCa267SCNBZtElnBYNeWBrF7de1D5HO7Sx8xfWFe4jZ9Ax1x6XOCuxVJQmOBPKcM6mUC9+uSFpDxrDbinQKJY3KUN3aufCerKqu8T+IPSiDB2DJL9shj41SUUZ6ZpQmY+4dAgGCDVyMwidY4TKJZtfrWBvJ2Su3wW0Y5Q7irxm8DS76facMXS0MQtAPsp6KXwOx0+IYlMmFoFyurm0fa2rCEIQZxnQi0z2LVJ3faPCSL+KZ/EIY9JUSDxWaZYIz4vhRCJCZI9mZkU3H1G3nR82QwNIGYgaj2SgWsHnTx5f2In0bAl+KDsVp4UgdnsECIhMZLAx1JU70Q5orgV4Lxt/TtbWA3v+ZjzXYM/PYwm9EUOddR2hF71NaGJYxyRVxaP6uPfiK4Y6EKt2Bg61fxTHhYLfH0s7BVwOpuP6rEJbsU4ixho/qDEUhmbUsq84DSAJbWJ4YIFq0eTcXynUBmdjHjmCUcCrJpx6ShidPyT94vTVr+/Gd4CLdhBbBwwoAOs3JQeQLfNwEGElzgBDyTCTaBSymztIdJS5vCC2BzShx4CvPdJMZa+T8O+sEK9Mh8eHCANS9NWdlh93MJbNb+InHFS5SVnHaidSuRjYnLHYy1EjaqPxiBBEszsl3VPDaOSYkKNi/H/CPslZnCCuKADTsoRoLzSRESux569/lv5f3P0xG/khe3++msPDYO4ZiVGPU9QJypIVg8OmBCQLh5bJxnqyEjyF+ZGiflBQsbiWQ/K4E2TlDj4OqXgrVn3ZbNx+ofuUIfqgtlyweTr8mIWQriq6Ku9pj08DCBko9KItqzyVaRIQnEMl3yMxANUhUsFVvmF7UjdaA0NGHkETY8dTryCi2IsxbKqL/Vz5/JLEOrwoQF4eKBLf3yZRtGxeugEeGyTjfqc3Bi30VJwC6KZqaU55mq1Q9iYhNL+Oh+cPraADbT0V62VGRBq4SBbsUgpxUN0kJuIIPZiUmrCtaK4N/ETfh7A86I9KpL0hLmy+ajPChYaMk8jw5lQK9VUBoYwmb+ko9llPxR3pf6aQSm25ZxyzKLWYMZy0FQs8TLj8DO/OM1ib+MOJSFOKxm7LUQnJnRTOYbICjap2GT5OiqM95nTz0GaQ8FzEPytsfgnIa2MgBns6ORhGlDm3aFTT0aY6C34OKiBRtwzuiwP7MRBy8716UU5020ubYUjxYKjuX7Qj/988mAdl8Yp+MHO+8ITzL4IFrPo8NQA4J9TtFeQLrN5kr4Ukij4lXfGv//JeKDAn5vgqrwfgl7emDVpZomhsaKTh6rp7OpJQt/nawPHcGdtsUMSgg0EA4/DvGQAWlgWbnYKB2XpRncanJcvM7fg4ezHARwK4VzLgwzaZ/m87LiYvkI13a+8f40VEU4n48/9rtJspZFLp66IOixy52tTSBBVOdr9JKXQciycy3kQwxMEf4y/vsCx60Y82XpSDM2LYsdcjOaHV/qyPm43tUBUZkprSosXpfuBUjUAbQN3pm/SjIXQQy2iqSPrBjuAqByxV5eNkhg6+K1Ou1EhjAhuVSCXELLZeVtTTBmYPofq2eiK+NA25hwxiy2yXvVDmsiL/hnMDqfXD6/PhUqFSlhm/ARqoNZZp9SPpsgM1FZrkt48bWHFcQAck8VdscJuJr1KHG7+AiwyyaXgVivyF3KauKGKFyS4X4uspzVwjVE+omAC58mXvUPS0TuYE/1gvShQUmmwO5itRa1WZXFqI/2W7DcpRCWyNqpvI/iGxDrZmyZxhfKpyzNnjcNrEVprA7xSKfThpBxnI+gEDj81vKgTtTWP5tvLkNjXo/VyGtnZ0C2sTKLMhJf+Yu+LwwPYbiHiixDQcH8/EcTmX1UvIXOZGLTlRbtKWkn/VhHRjRu26/DJn0OTmTSWq5FHFa1UfFYi0DSGbRClu6CpKV4mSqwxBvcDy6WXSb28iZvsK9qZkEBBdLQZknE43e+3Q5ihiyf23x1JBPgwbFfl05ZXQdvmZ3b8m8Lg7dB2/ZtYVjwso9EEXDbRLIxagAhtry2OuWQNah4saKOzJ4SMW2GYNxYQqPkO5mTPzWQiUqZ+uWC5WUsfy0CCVKsduuZ8R/TmKvufST5oI5Wiiwk0w8Fj4UDLN9ozcg41IcPSQKGcQaBgZzXVmf1wKK4jf4XMxhpvrAwywZgyUi+9gjK+3G+o701a7gwfvCwYrgAwY8P3SsRsYdWjGVsIcIgX1gxmPiT8xa2V/LEatEkFpyofalbfZoM0m8UBmUV0e6sikctvzeBpGOkdVimRhCvWr9P8nyAi4FBa9WpzDT6xwLMJRxNtSm1CoGTJ2i+qEivmPKX7l0kf3sChMxV+HhsoH2EpfVImecK2Mdxc+HPJLI9luNWNng4O+6nCH4zePVlm8hHtc1dip/MuQusFGYPh8xY3gf3DfK+mZpRLeElvX0MFF7ep/SpRi37ZpVe5WawEALtsNPaGMxm/WV5KYuK2GlEx1eZyLBIFt6Wzo40dqbtWwlDQK8ILljEEnbED1HQSNnfQaCIw56AvjgSr+XFJivzdqylXe9a4G2JvjTIuLGKmCiWRhzho34qK5m2LufcRyhqtpaal5rQACmI0V7p4PI+iZ8BY9WgoSGDYB16l5uB6aKDv46PSLBe2KLj8jRrY2nsjt81hZNTaL6E5/VzLnmyRbKvw0RmPk/EaHZHmM6Pfy7Rwf/UkUbKRibB+74JZoJDLa0P8rrQyZfMZUViwoL4XDwnfGGiFT5IjziuG9zOWCH+kFHIQQT2kieZcDQczASloK4+E44if1DrHtEYdc2sT/yDznEq0J4Hntot8X2yOiVNBrSZCpEQTmm8ViF+7Wm/g+bLqnLh4EitWuePnXNyktboL/IBwbBoflTKfEJAWyZ4Vi7UYyHNivbOCUQYxxFFojXOikG28rvlbpI5zLf52v+flPa5yGz2IuAnbBJI+6hXzamYiEbDQYf2rZgZs6SlCULZ5X0q36pRBDXsi4E8WNnpDBuMbmTHlriNnIn9KvnTsJAPnHl3AImc0rBBydMqZSPOvVVUznyXWh9OMCEqKwZTGSujm9ydu3CMYNWZUlvAmWbKGXsz/ip4rxqHckNbw8cZj3XG0apl1vFMKuUdDhQ05X1Qf52K0egUZFD0Ui1IiTiwb5OSosDsblabZ10GKS6DmsaLAsIJROfXsUOr5G2FxQo5gvzzGfgOHOlQWiGaNGyXixSaAZzvTjTSxNnxdn2Onzuwo9+kWaFAszrVtcuz3RPsfYVknaOQX5zXgbeNSOxW50zWSECeq5N/ddpunbFc53XkuVemQabM2iUz6t1VB01JM4Rvf4JGxTmDhYLtEAXJI4Ty2YBbAWm8DBAaJ59WASuI3824R9rP1akE+nPkGVH49ShaIZt6bMKsPqsShbLtPzkC8EvBz42FBq7wMcEsThagRaJBG7OsI3mnjsYaM6ISbmPUZFTeB/N7EUhKt/8Rr3E6wwrSvEz1LwOrCMZWjxdMVa5y0kE21MzURejWYT6tAgYU83KrBPYJG4aVshFpNsY2rpKPOAaoSxfg4VqlVVTU0q0NaQNlmSzkheBHGaAyXwBW9PJJm2Jry/tgfl8CqbVX2BoC7WBIrZiRGVenMGg0g66YbJhoGSBkCZtWrs9xcRpt0aqZWx3septo1IOQuWxjry1fLKUf2fG7IVZw/dAWb7SwtAETFEagrJTVYc2yOiWvVxDEAYdOGawSuTOBZOaGCK1RyV/nDKkhKfku9IMD1S4h1qBo2+wiOP5s4o0OQdImHSvgzm2ZtH2dFcskdacp6ljKCLLKjHfE0cThIpigT9kGZF6ay4JMMTMq74P4fSrESAw/XRA41L6UgAl87JUZ2JHO5iTbXJkIyO72VIAH7sIazaHb+ZVq02Cdqn6lnLZVzs42NtcKYmx0rkzPBAjE5nRJPi8Xl/C1/D4EQq9fGsLMYalfC4keiQ1ImhMNtBHjyB44n9QkJigTFW3blPZZWNp6a8HmbJ/xvLRf+mRo5i7pPh0+1G7z0kJG+EiYhcPbUz4inS/C0uu6obZv83H378e3ALWufaBT+jrtT1FAg2jVptI+PrcBYqRcfcuAsuRGrqPyL++D+AZZ14zM3iXN5MJx+GGsDDNny/q8PrzgZRPLjrUNLfFK+N7v3gIGv4syaI3IPm05lH6YVN0bRFz2Ee/Q2Rc7fDny0POlD4HUArqltWfRvZMxTLT34S5fO/itGWWG8Y1Jx30S4Z4Bm3xsrFxe5hIAQAtjpemyn5GsToQz+5IfnY3RFuCpqZkfwXHFjzYDzG3enPZcNtHYubfK2NuhUUo2k7j5Cdom66AF9yGQ2oJ3VdOLIZGmvZKfTuEvBJ0aYC4CaNvelncGe35AFDg996CE3SvwUyCZOZ56//gPDViFACtfRoRsmwilwF4I03GzGFkIGHSIbYwdbAPU3gO1qrIA+QuBkwPgBJjsM2eHs70a+LvQ7X6pz93V8QDuG//hAeYo2gK4N9c1PQwatRk43OlP+laXPBAHtSs2h+q6Nd4IgdqgztalFHCow9Z67kQgYW/sO5i9S6G1kFTCRvNTPnxpK6h3DYrBy0pnGxAOXDm05F5h8OqEPyfgpsiHxWcA+Dsp/FEBF8FZmWzWAYPSjfGMHAj2RRgAABAASURBVA3gRFnLWaVdW+SuYnZbbKyUA+y/OA34O3A6AAaPTlPC2a46/N+Vbx8OEGzXQmZJYhOGz7UJkvfRIPUxDupJmiFnrWFdu2wDrksmDOZKfHsfOq+8T+G7ZNk+jJmUcDhFma1l6JzAxwN+v/Dv478/8LcBv4VCs8fEHLGsOyjl4xIFg91Vn2Z4ZQGD3ixvdWnFc8JAKyk8LpSJjBp6qqJt1payEAgo72v76xCIxsBOrI1Ehwxo0OjimTxPXXYHNGeNMeJsNjO7EXLz2Nv5LfZFwnHvTEdIqE+wWrgMk9gIRbRmWY8D4xm0RuwTuEpmdb41e6XTNEj9fexnWgqzk5Vr6rL71I0q0kTSJ21JY7Usz9vsw9OqbgIzkU2FK2VMKQt7Bcr72n5XAplnsWrqXRuZFTKgQYMz83Ms3gpJNhrFJLKuwL4LE4FGtrNtPJjABmVzZL4E5lmsjRJIvQdiZtQgS3Af7lP4WoRhF5+Wop41hitk+JwIkesQ8n9GprEKDY/Z8DmqpxUEgZjIhi+hPcdyPr18NU7K89p+18wsn6VQs6NZo7yP7SOMwuLpiLHLGyJ/BIL16JsXtXHftJOmCyGrKzlEP507Exp/UhxSmDIRaB6HcV0JpC7VibgpZzcVZ6QIh50gkAwa7bMOi2TPQ313BRAIXE1kBqvnsUEbk0lLOYMqCFYmkMwIbG3qSpsxClI9/U7JlE1DItH8BpGwbQWsR1/cdmIiqCpXCJoyRX9Vn0Z93DyBpHpmBbN4Hhs39fLPBquweOuwLQ3yE/5bhw2ddCN2gDYpBKKvBshu5SxqWbhYmq+ceFnElVeQZDI/I6zDOiS7zo6A3jR8WJd1ZuXOBa+ZYB1iXiftmmivlbxMZGtlsg2JuxCI1WOeSKasg/MGGp5yYMpy1y1rnUFesw7r4jFF+jKTz7PjY5c92pjoQiDzLNa8em3sRmAlCt9d48vXMTVxrmXsdh0y/yKXmsiGzPe4vAjqx8Xp9d2AWzXh/OpRNBarpl83XllBVstne2KtQyDrrD6baIGyKTo1gYxW1y4EMo/EPMHMfx/6fbRZYmhE5/Lru9Kq79Ry3hzqnV8LYRgboHMG25agC4GYHcoSqh5UefypwHFPOBRV71TlbqqcdVaeTeFcCATuCHxTeAxWbhcCoa6sCWRQm5cVaoTdIIxNXe4KqC2N4nKJpREWfCRzublkweetDkYgUyI42mrVhUA2PSMQWNl/NbeeT9n6fcvK5qqOc8FEnyykdZdvlz7qU86QacrkZSKdcrzQsA5Zj8O8ujS+vYe60lNabEK4bvRBN4Nk3gU6xIXnxTrEn48q7ZRHWOfL7/re7FMlkbESbzJntS2F4TLK89p+FwIhMBqkpdBBbV5Kpkt8jY7NE6XMVJ63GZyfr48IdMXVKuIHYuwrdE27ifg0jcolK/KngnqyLrv5g5S9MoFk9xp7U68gOm8QJFbMBHGWPZDSESsmnT5a2CsC69VT8rrLPyKb8gBSUO7tiuLGBmc9VnpnuEJC47CUK7qy+YPAygTSUppr+9dJ35Ll0iAEUvZe6gZZmmgTH0Mc2uUqKfurAus6WrtrJ8/Cvqyb35jpy0zunL7+GrOsOu96EipjpP7e+1lHdklcG8+ZIadkdTR4MWWY8kBOl/Ypcc34fhquvK/ru8nFT7utm89o6UPABql666e+ez/r4mfV2pgMAnmXEPABwWiymTwsnsorXwf4RSFLKzy2EVx9U86udMFvUVyT0RUyCLdZFrHCmTCx4vVEuqhOQ4XX140iDuUPlfes6wpigJbCDVCzRnmfwqdfRyhWkLKcT1HuymVkEMPrCknQtW2TZKlzMTTCWxppgx/Z6tHamcAodKZCxY/nlLJwGIOW3bUT68LNagZDQW4K31l0MwTT96nLXrV+10jEMTb4zM5XS97b6hCIfqFtnPJAW70RawIFg7VRVwLxu3SlcCzW1KreQiCIQ/kFl63ws3oQyi/VARkqyb/uEP8CKcMPe3ZIMllUkwIi/mjY4UE1ScfUoGaxTJ7gmCSrf+5KIPUKgsWalCdOwxP+XMSmIwzG1Ws6cswMXO1BMO9CuOzL3tYRtWukLLN1x2SjR8cCKqTtF7+EjwU1i2V8gsHK6kQgGaD4y1oAW2cTrG8l3nmQkGbn4HErPHLRJYJJpzZN/K6O8N/j58a6FtM5fpnJy08hdM6ga4JMFNgrUJLaSN4oiwURMzgfEMr4U4IbzJU3+FX3Ml0Drpq01JzxRnVkv8tkcPBHLWjVzIOLevsJNncVu6N31aTrxpufoLF3lDjr5nuYvs9sh80pGUy+o51VjCbN70J8STrGLnPBZWN+8MBeXKYHAn1nO4Nxm2y0LnlQ93LD+8Hr6B5ZtC7kvfXLEM99CMTvQJSyR/lduJL5Et8vq/rMmI+/MQhxmMmpde0DdMWDQNmXZ75hyp5aSXJK/YKD+lvNsd9Tyx/1CmLloMQ5Bcd1AvoQCA2FDRnlSn9ZDxOD+1gZxNHqENgnLv5IcVbRdWQCatEjGa74gq3ZRNvPo0d7RWHCTo7SYf77KO8hTGOv3qh2keHg5SukawXouGt7l/q+3q559Y1vpoADwdhPsvXNZ4h0BukmZDG4XzgDpR4kwqaG881mM5OUe9JqBc7YeGCvag1WF3X5yrj1IRAriNN9pZBN2Aghjg8GASrVoj3J67QugxNxdtn3GBpBss9Fh860Y376n0WFH/ehReqYvHd0fW8VLRkUtru8D+J3JpAIybbz64bwu3CTzmLBAe9OnWjvoQiIgzTIqpmEOMgczNnNnqsmGzqegXn94LKRFSzlUrF+00Gl9MfB4ySesst+EPmjqP8HLbwzgRyUXjeGQXr+g/ApPRtsVIq0WevIAH1xtnqAZekJ4CaUZXGO+8Z6gQC8KB4iuVoGa9++XJTv0vCUp9+vnUg2i/0K1gfyPKX7jqowXA2ZtAoa5rFvo9bqNA31DcOgs3ouWUUIty9LCgqDq6fDzOh5ncxdPCUdt3q8OHHqtsprZ+cHPMl9yxJis2wgLosz9Df8vzYwCfgF4KHzPy6/2uSGcF5zNcelXfl7XwIxWxDKSkHnzwB1sKe8T+X7pVuXOdCkTLYvkLoqj+xhclhUV0v+a/IRIcdrdVaX42Y++z6vbE39+UDq3kt//nX0J/WmYicHvC+lWcnjDe/ackz7mwxozsrnD2fC7LunVPJo9XsRSJDB81n6S6ZflgdLbbxJHWXB+1Oieuiw0Yk0naOet0iZWJt4rY7K8yX5YnUjL+Wx1WnHpTNf2voTgVcntfYWP4+nOAPW7vpUsgjtYbmt5T3Bb5TBeUotPx9g36W8aRNEWt4H9Q2svhkWkw/paRM2wWYZfG+CQMAK0mc3O0k7OWcy6g2qtsQG8z9k4JAdasuDtrirhmG1aO8Wxaf2dDT3bIsiDBhOtW0VtQL+2YD5HptVJihjVl+XuAgER1PeB/UV1jdDalbsjfRmsJonFDYV0H+/MYUZIKMSaTqHnHO5lLVsEFoRXhTiQLyJupaTV8nASvmn5WWBbxWdYl/KALWCPiX1nHLvQ7Wxk9TbngEu4jgZTbxesA6BmD0+XJV6sQwgPGkVNP5jOsgs/ZyUtGx2zedB3AWSixUkXqtDFM8OTjqtRKgHeQlb1T9cfZKner4iCZfx+5QGWK11+jVFHOtMiH+bWO8ITO3IH1i8Uq7JyCpS3gf1ezdkOoxwWWtozK42jQZFcMXMEOvrEhfPH294F+JXv+skZzJIvFb37oS+OTCKS5sjPJOB+i4q4zvzwcm+eKM5iodXBZ/RBuYSzBmolj6AB3X/kugLP630oTeBHOROi3Tw2HjflYFkdmlepvp30FFkESrHsYqlSj3vksx1lkHDr6NZVer3Ls9twi+WctmgsIF2gy6F9IiLpan3wnpk0TsJ+ackfm/6ftlkUeL19tclEHyxWa0gQHCzBJb3yfw0lE6jVlXmhUKog8kjycuO7eWT8SLiN5O+ITjUiotEb9w8wTSBB/+wTctYsEMW6yD+LGUgODLXssnARFVvpJXkvfzU3x1oZMzSpi8JHm3E2yv/VRMFD5NU0VRqO0arqybvFW8tAkkjQfKZVcnUvVMIiVWRRx4ZMQqg7rxRGrTmVYX3BXJHGRxteThE9vy2DwnTRvFanUG+jIBaE6Xd8f82IRfljZAvlfoXVqQ1nw6B9hyum/jyjTcryhnPk0DqQilQrx7abp6DGRyXtQjkABsqzTLTyW8TZh8HqBzxmIEMZafllkQyyJECDl4M8Fdk0C5aCchqB1E7e8sUD3+S3OqzOXk94o4j6iORF71kYCIKNmcmv0XRpginuapNmkyGo6l3S4UM6PLc1ycY17rwi6RRzeB98xsiXZlZrxxcvjmgkzvnK13giknoBF+8VmeQjnVQSNu2FhqC9M0O+yICxBauZaOVuhsf2BqTnjYFrfhMEEi1TEtXivqTgzYo76P4GqB7xlWKIIn/ttThjX2xFF7TwwbBoH19ytegt4u/jD3K54WOzr1e1ucj4sOfnzZYtHqIP6YQiTCZtCinDcghtD5t35aGhThMKtKzGhDXilWbFwmbBIKLMQUXOCmTvDmKebvMa1ibQA4yo96shfWLplL41oPPk3t4ZDy6zUyr2TWDTxHuuiDDpGFZPexuI8ZleeKVl31f9o3JysLvIUyrx/MSYRmB+hGeRexhki502g1rpd1wCC9KzDGJPdkvdBfMFyxzvMZZPSbBZRACSUeRQdgLNdjnH1Ujis/jZlxwwr+/IKVrSHZDzk3o7AQd70JQdsutHmavtgQE89enHCto2/cSdtx3bMuiOL6VfFr9lG9W/4N8xHLFO8VhD9X/lA+LAlJ3K+8P57u0iPS4VTJRx3HBRfvfMLnz482MNRyL59FhEAI5wBKBlJnMUnjJVI5/8Hl6L4PHyvbElGwWN9jZKun8BB3rrpQYtVCY1yNOfQ2eI4EtL9iwluDDIB1O0D8M6PGA3ag3bessaLK+tw5Y9pw+s3IYkFZPK/Fj046IcFmyMb85MUpAL2WYmAjo5X1UfzACSSMijrdW2DLoc16gCpr+MXjZ0LI/YjZGJG4gWYpIBgmNjXuuFsXDcrw5eS+a+Relawsnuy3KxyrYluZIWPBAZC88Enj05ZtSJzvsR0Pb39wtrN/05/OS92iWsu3Ffz40OFvFHSv4fOBs9sbgBLc6bLTnwQjkAMM3xDdbx5tZPW6cSnbifyUcAZieU0fL+lrBCV+u8b0fgXyDt02xRSuNwfjMdJKBfSTtgheEueDTrLTVou+rljELPlYQMlEbsWFPrpO6YX1by8q3/xW4WT7aEMWuPSN5mggStDHnUFbNqv9TcHrLlNgMTSAudLOJVerAwtZsVN434qdRCbNPSOEvD3g2S145z22OwaXZFqHMfzfYsVaOeM5/W/R+HIu1KF2fcASiD9rSUjZ8d4jglHoljEr4xklktka0z02bMd1J0EZDoqaiAAAQAElEQVSd1d4YggSifbaHKWFQAkmjWvoYDdZ10CkrC8d1wiGfg5vZ2AAywPHl9ghulsGBIOqifKt53vobmeM1yQuh1OFjPSuvS95WN3sjBtN8On1tZTyyoqf+VpXbJLJ7ha00jjHjBBK0ORe8mC25DLwgQfZgh1beJ/E12qAFZfBgZdgKlXzt6NbLZAmf3A9u/x2gFjWIDAYyyU3TGQTTgg9iRiTlvfgGHW1O10FrRi55dPUR9cppUjfsFTnQGe22dAReG3+z1Jl9lVXlTolIIKcoeHHy+KNAp3KTflAX3PQNRUEhZvX60+BlAh60rOMyG5xADgrEypjNvOL1Xdlv4HnfBmA3RajFbmEBb51O+caA9tAJBkuNpw56WzrouANLdZpVn+W9aEB2Zs+CozQ0d4s0TzdIPSkhHK4qm6hYxqcFYXtH8TbuXCVUb+5iGzdx9qTzT7Ct2nJ2OmuTbMIWk41V048R7zDPDCIEYBV5XAJpisygP5RnR3Z9m1cjWjXET5TOzuCX57KE4rR9L5NM27eFYamfAWVvpI1IrJY/ksRkDmwMLdXD8/7WpJuKdUxxSx1FQZE9RHQITT95nhTMmIMXmIbW4WQRbEnJn3UpQinvG/XhGGCm8dgggqDdsfuDeb5RwElJM3seZ3zLO9N+750gZVilrEqd0q0bOeVSb98v+ZAp7GewdEA46sPi2gCkUHlS4n4wsBXEkdUNC8j2K6g37l3BbXSz9qakln+jEIhyUimWlvV9SZZ1PL/PWwPBk6nIw4KQk4AGM2FVBxVtD3MVgyxReru2wWegtoXXhWCX6vdOz6kbmQs7+VtJqC+wuerFusDe0CMSZ361TNTNuBCHs0Q3qUonvzlmXAVN+zgagRxUg/1OOUOtrEunEVhlHnzeDi+DxAry9GADsDW1kP7afNdR+dzbtaVHHMexXm3pOiGR9iZr0FJdKwldEUsT9Pg8P2eAeiWbYVzwND6wuLRqJVNyBxawvE/uQ2q0QtMBWC28O185Nt8cZBr7zLSyOkFw/VSAEP7LSahjCnt4k3Se3+I4d3yzbz53diWv+YRWEWHF97w2BM+zBr4ucJdkdusA7ZUysL0PTz3/InAccSbZpM7qQfYobUxxQPbYKJ6jEshB8+KF61nAHVqXT+eVhjiIth1eBg62hhYIa4L9MrDYZd05GNqBbzlfki/LXVlFF8VqE0DLpLIozSnhadOzB6jVyVGIgzYIcToKTEv1rNSvc76nFDRwQHAmD1GSlD0pROG2EqzgwKV1y250AkmHmAmeG7QIifFmdNx2SOngvW8dBGerCZ6dlsvuLRbMDPcDQdaMfPt0qg1QKuwEHeusTAbqooht+xYIFXEuSnMYHlwQhqtHb59AVrju7iJvUCwg9senTm8KkLESZXtccDceWDXUF2JgA+3nbBzR0QlEDdMxdkFt0JUOx2rdJY2jE0XZSgje/xxwUOj+QdCKYvbFI7veCF//C6nD9QJfHsDWLFoV/XZfvYomu8+55K9NENDKs2XKOkvgbAFsFM3bLyU3B5usHtS48HRXwG8lf+pbk1SibKVjtYCgC3Jks61YPSA0CYEoKEClaqDksXHsfxxkqgXi5sO2/csg+3SAJuu+wc0ZE2b02CKD0Xn1uyf8jgHm9FaW82bwfmmgad+ktXpYiWjEEu0UR936qoTWA1maBM3Krvd5kt/5ArRs18uHHw/8bIApu1nYDYeMCyka7p0yXUGEUBJlO13qQhZF2MYCJOH7guCOtfW+cWg6cAosUmnaIbvX9SCg9jXrTYHC2mWkDv8RYCVAC4T9YiWM/ULkjrZ+fwq5VcDqctv4t80gYNFsUDu+S2FhkjAQ8vlzLnkiBnk9JSH2YOI1zm2VTC7kV+CW+fJ9AYK3/sNGYWF/L2FPSF6vC2wdKxXcjri0C3nDTSn1jrmJx0RxJO4mXzTwZOWn47AZz6oK1Eg/lMbC31fBaz9eInnefywIdvcJWDEMVAM/r4eO/ZBNR4etbHqRtwigdq/NlgY22cWsf/OCY1Lb1EMERTYzu956NptREDAydO0pBcd8n9n0cwfATySPXy75jeD/avKvB3Ne13LqxMynZELmsnoQ0EvYxv35xp4CISpU1qJ4b+WRR9hCzQ803/oCWYB8MzYg8C5tCK86PkIpOMrLSiROl3ojtJLHmD78uuLWWo8QL0JD1HAXB1E8PRPocdo+cSeFurMmKTiNoDGYndd2Qk4f4uXXxcGhIWzKHmazMduA6Uqvvgpx0FbRtJUJkVDuCAFFRa88x0w0OYGoTIgEn/3gPBd5xExyhTTe9RPW2yXffwm4SGEPZ5wxZhusrHGrOzP9a4Ukd9Q2eezDtsWKuEa3ed4IgSg5A5kWiOq3FigRyRXTkBvDC25TQOroiKsfILVDb4KYotiNlZH6YqWZu7jCp+DBDsylEGub1JQMh/Y3PRCZxDvhV+qFJ3cXU32SrHw7EX4GyrcHaKZouwrcImFOOBLuJ6vnVAWlbvoVC03hUMYcFpvcgUimQqVzOQXZzgmHSJBVxOphA45lacnS3oIB46xCCTsRfgYKwr/5QWXU+9F5fkyAqtZ5mVsljo3IBJ0oxzqaxq8ebwxZqby3uqI1whtBNERCSPvDFG4jMV7j4EWzRSXaBOz6vwx85v5MVWwWsqT9SOrOHB3Q/RswLmqj/tz16jb4p85fEKDKNSlQfwunpHll6u7nIoomU/hWgoG4ccTSWDYRbXbZUS74WEGsJDuzkVgQn/czSKhH7YnQ9VshvjhhXxH41gDjRypUKlobiAw5Ge/NZ7OL74jDycVCHCbD16Yi+jre9rutIBDNFCL5SHzshhk2j43Dk98yg4jevAnY0X/a2cUVvxv8sZBMRH46zzYPXZpw7zzbhbeSUF5gSRK0uy595hwKq+JiRqIydsrZWbEc8L71oOO2BskQCbWvs9SIpeBFX24lYd9kJi7hu+Rjr6wOBr9bX/gPSH3vHrhbKuImet+d12Cazqx+JzVbIQxGm6xz7XVYGVO9mZVDvR+V+m6txgqi87BVBAK5NCBzFLZOBFdBgDkFM/MLpwN2kUisHoge/82gUB2aX786qA+Wyo3lDA6dn8GSICp13xlIXRAEZcPVgnQ9tpiuu6lx62WO4H3E1ZU48mGTLyES5vGsUs20BRX2WsWWqYTtim9j7L9SLwOEpapVwklF8oib1/nYK/WxcWb1sG/gfScgxGETkLxxnSBcs1VuaHxK6l73ZaLshttKAtF0aVBE4joau+4GlmAN/2PpjKsEdIiwXQAshvMbqdYZ/5N/hFT1wqPfJBX444SVm0/US313hk9PX2CDWUGwWkbcqVLjXIThHmMrZxOwa/+2lkA0ZAYN4zWCbf17EDadbCZeNx2DNRF124G+nwoXC1JwdWLRj8IYQLX2juYHO7bVG2ilEukDtlU2PJ1LKeOJto69nTPlOyVzlHoVv1SovG+dHyIx07q7yiAr+FGJ6pDbpYOYgJfwbfX9fgfCtg9ScGQG77ZGwmsTlro4XUfAfWHqbRO1Cd/Wf8HXhXs/Gvzq/SqrpTMzf5g6ULrk85Bu2ry2nkA0RxraPgl2y447bY9guNsjuaOOCtRLu+9bA8HfYHcS8SLB09VHiIAQ7pRig2fCrS5unX954juT3YRv47/g+kUBdXCqkbKB0gGq7h14Rh5emjqUfsrr7jqDbCewT4PjyZlnGGiFX4c7Adgds1dOpxlkwrYOgr9B79TgtYPcJQO0OgjfkVqri30QdWSfls/b6dLGWEXCOMPDQhiQdfEEYZzpOhlK2M7DzhCIls4gw886tvr7eXdfbrzG0fg4gEOA14FN4Bb+c1CMkZ7f36g3RKmB3QnlB2Lw71uIenM2nhmMU4+EccqEgifVNDaYX8JOhL9TBKLFQyS0QHj6B+adutSsm8eZWdix1DtklrtcANEI3woIPvBz2QLFg9WkwSvhWBQ3CrJqdgb9/M2HLfoXHL8qwJ7K5h+Zr6wc2CgT1uPSLx8NnJiVozT/zhFIQTydYSZ2UYEOqtWI9hSoT/3uhz2GkmRjfgaXAeWqIOfMnbs2sLBWzE5sgBLUGWzaULt64gvfGL6l4OBxrgBliDP17t2q5Tz7Ne4X8DuGW7vqlbqs5LdE2lkCUZcQiZNtbkp5UN5rtajZGjvAfNzvYWx6wFklDDTEQZBFHAabHWdaOpe60f64g4scZRPRbnqqtRkXwqBRs2LcIBhgWxF5HhuHkB+T9idvNMTehJ7AfztNIPojneTOKvw8lsvGFKKx1OtQ+yTOIfxkOtxNJ6xohUs6CaRcrJ4Z+NXBtT7LbXVDxK4Lgqcf4iS0PzWIMa1xdiSP07ngyo6KlbHdcMaU1Lg1obri6Gmpx+8H6glpOiQnLmnnCaS0VzoMYfihTpcVsOcqn/jMVNwnRcD0OyV25IWPChlwVjKbmuQONlhNeQknZ9AC2VH3zS9wNQMx9TDwqEqvlHhm8SbN2P9SluuGrGj2Na6a8mohnNaQmbr2ZViZz6eHOzEEorsyuKwcrhUim7AKNiP7BNTVvgn5hCBvx1r4mODyaMSAT4cb1gpx2jB0UQGiQdCUC/Vmm01RRP6jGbg2RUfDMfl/ZQARIww+oqxXWavek4KAi6/flzbGCub19HAGzYmqaTrwzMDHArRCv53K0XRRD+excXh8Jh5OLN47g4PmiDBKJmgiDPiP8sAAdzDK6TrtXdS5dtE/GzzJJPZ3nHtx/ZHiySyUDX+T72ZvYYNB6gwXV5laMe6ajO3NWEFKGyCCf0s4wv6V4PD2gLok6PRyOmyIGm9lHunUfwz49SgzIB39vECJ9WJH9GOpgEsTLpDBQ2bI6/ouZVsFsEtmZkCdy3bJ6lEX4CfG3pgAv53isBSrZb/h8eSEDeZSt3MGrJwMC38qGZM1Gvknz8WRM1gWPzr4Mxkp4aelf6IJpPRoOhrbZbC5JAFbUz7xyQmEYgPYfbrYr8H2UVI2Q0v3+LJ4NSDZWR0x/U4cM7Zddj9bZ1Y3QG0qwm8tCEGcEfjqgI1U16XeLBnSqPm1qTweOqvsS/P2yABtG1zyeHq704JAdHEGoYun3x3fjq9L61jQGhSNbJA42AusDbnhpnn/+Qwqeymu6aH9+sK817x5oqzmUiY+3g/YuHWdxu2UhInDXsteyEPy/I5A2QA9Je6ygODopxHcueUnGZi0IApHfBEIeQiLWeqh7uQ0atsHpUyE8eH4pyU71daupw2B1JXPAMD6PCJhVhTaGZteeT3isFp+t8IA82tNzm0wNPyWDEI/bYCgjiRY9pIy3V5iQC6MdhAHoSyM0/Yh+CBewjb2zAqEbSRb0NxdKGkaDVn84hCAlc0PZD4s5VLb2o8p3/f+QQuclgSi7hkUnwwYJHaDXRbBvstpP59r0EYE2EslkJGezTNEc5sMTOpZt5JYefJ5GpdyrRJfE98RZBt5Ln+ghWIOYqVwg4rN0bJSFMSsmGQxS5VCTwAAAoRJREFUEwO27/lpg9YVrSQ43X2dv+VtMC56GSCfCbAj8ktMNht/IyVaVbAeZvN61jcTMxdxJZFBaC/jzolPG3bPDFi/B0J+8SM6fv3pHAkDfiLNLE97BJwubAPfABZJGmlp2GjBvid5uczBaubnF/xozx1Sto1Qm42smq16dZ+SbZiB2GuhGPi/qauLE/4y/r8HerFxKfO0cXVjnjaVXlbRDJoPBMgLv5Z4Lo9g62VfgtozQa3OppoBamec/ELYtxNtEP9MUvxkQBgB2Xd7Ma4frUE4wBb5rUHpfy7p7hlw7sLK5eJnMhKBf351SLTGGfROJFJMMMOxWjwwdaIcoFJuIu3/rdYCewJZ0E4ZUGZYg+w5iYJQDDTAXmoVtoR2DOvF+tXmG5N2ZuIEZ7INTVINWDjf3CdlRaCCRgjUsIuIIag1zkqHiN3OiF10TJlq+2Wpx3sCvjcR9/+6tcCeQI5prwyusvFoZXln3h10+vUku1cAH+/sNYLB3xuI9lrM4jVrlqhrOaySPAnXWCZlNZewJdcHBNyv9dDg5lK2d8X/UICMNSQOKeb0c3sC6dnnGYCfCLwl4PATgiEX2Lkn7PvBTqyZvQw/DOP8CoWAvQXg9N08IDLfgN1/q5fNQ3mQH1yDZHX4zaB8n5T78ACCeH/8PSGkUcZwpzeBDNiiGaSEfYPVHoZL4BAJOysblIz8sGlsxBAQfx6EFxD3iUHvyckXvDi+H8Sxj+PSa6tUPu/d2C2wJ5ARWziDGnvG3uo/8/xvAUdqacwM8jbwDXw8cT8V2K8MI/bPKlnvCWSVVtrHOW1bYE8gp23X7yu+SgvsCWSVVtrHOW1bYE8gI3X9PtuT0QL/HwAA//9Z9ezpAAAABklEQVQDAEDgg9uFOyMnAAAAAElFTkSuQmCC`;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{ "headline": "cells", "figure": "western" } /*EDITMODE-END*/;

// ─── Hero diagram variants ───────────────────────────────────────────────────
function PatientNetworkDiagram() {
  const nodes = [
  { id: "tumor", x: 200, y: 110, r: 40, label: "TUMOR" },
  { id: "blood", x: 520, y: 110, r: 32, label: "BLOOD" },
  { id: "patient", x: 360, y: 270, r: 52, label: "PATIENT", center: true },
  { id: "gut", x: 200, y: 430, r: 36, label: "GUT" },
  { id: "exposures", x: 520, y: 430, r: 28, label: "EXPOSURES" }];

  const edges = [
  ["tumor", "patient"], ["blood", "patient"],
  ["gut", "patient"], ["exposures", "patient"],
  ["tumor", "blood"]];

  const W = 720,H = 550;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
      {/* dashed edges */}
      {edges.map(([a, b], i) => {
        const n1 = nodes.find((n) => n.id === a);
        const n2 = nodes.find((n) => n.id === b);
        return <line key={i} x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
        stroke={WP} strokeWidth={1} strokeDasharray="4 4" opacity={0.35} />;
      })}
      {/* nodes */}
      {nodes.map((n) =>
      <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.r} fill={n.center ? `${WP}18` : "#fff"}
        stroke={WP} strokeWidth={n.center ? 1.5 : 1} />
          {n.center && <circle cx={n.x} cy={n.y} r={8} fill={WP} />}
          <text x={n.x} y={n.y + n.r + 16} textAnchor="middle"
        fontFamily={MONO} fontSize={10} fill={MUTED} letterSpacing={1}>
            {n.label}
          </text>
        </g>
      )}
    </svg>);

}

function HeroDiagram({ kind }) {
  if (kind === "cells") return <SciGlyph kind="cells" w={680} h={480} stroke={INK} accent={WP} />;
  if (kind === "heatmap") return <SciGlyph kind="heatmap" w={680} h={480} stroke={INK} accent={WP} />;
  return <PatientNetworkDiagram />;
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav({ active }) {
  return (
    <div className="nav-row" style={{
      background: "#fff", borderBottom: `1px solid ${RULE}`,
      display: "grid", gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center", padding: "0 40px", height: 52
    }}>
      {/* Left — wordmark */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: WP }} />
        <a href="/" style={{ fontFamily: SANS, fontWeight: 600, fontSize: 15, letterSpacing: -0.2, color: INK, textDecoration: "none" }}>Dumeaux Lab</a>
        <span style={{ color: RULE, margin: "0 4px" }}>·</span>
        <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: WG }}>
          <a href="https://www.schulich.uwo.ca/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>SCHULICH</a>
          {" / WESTERN / "}
          <a href="https://www.lhsc.on.ca/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>LHSC</a>
        </span>
      </div>
      {/* Center — nav */}
      <div className="nav-center" style={{ display: "flex", gap: 28 }}>
        {[["Home", "home", "/"], ["Research", "research", "/research"], ["The Lab", "people", "/team"], ["Papers", "papers", "/papers"], ["Software", "software", "/software"], ["News", "news", "/news"], ["Contact", "contact", "/contact"]].map(([label, key, href]) =>
        <a key={key} href={href}
        style={{ textDecoration: "none", cursor: "pointer", fontFamily: SANS, fontSize: 13, fontWeight: key === active.toLowerCase() ? 600 : 400,
          color: key === active.toLowerCase() ? WP : INK, borderBottom: key === active.toLowerCase() ? `2px solid ${WP}` : "none", paddingBottom: 2 }}>
            {label}
          </a>
        )}
      </div>
      {/* Right — location */}
      <div className="nav-right" style={{ textAlign: "right", fontFamily: MONO, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: WG }}>
        London, ON
      </div>
    </div>);

}

// ─── Footer ──────────────────────────────────────────────────────────────────
// Funders moved to /research (logo grid) — keep footer focused on identity + contact.
function Footer() {
  return (
    <div className="footer-row" style={{ background: WD, color: "rgba(255,255,255,0.8)", padding: "40px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 40 }}>
      <div>
        <div style={{ fontFamily: DISPLAY, fontSize: 20, fontStyle: "italic", marginBottom: 10, color: "#fff" }}>Dumeaux Lab</div>
        <div style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.7 }}>
          Department of Anatomy & Cell Biology<br />
          Schulich School of Medicine & Dentistry<br />
          Western University · London, Ontario, Canada
        </div>
      </div>
      <div>
        <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", opacity: 0.5, marginBottom: 10 }}>Contact</div>
        <div style={{ fontSize: 13, lineHeight: 1.8, opacity: 0.8 }}>
          <div>vdumeaux@uwo.ca</div><div>@VDumeaux</div><div><a href="https://github.com/dumeaux-lab" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>github.com/dumeaux-lab</a></div>
        </div>
      </div>
    </div>);

}

// ─── Bluesky Carousel Horizontal ─────────────────────────────────────────────
function BlueskyCarouselHorizontal() {
  const [posts, setPosts] = React.useState([]);
  const [profile, setProfile] = React.useState(null);
  const [idx, setIdx] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    Promise.all([
    fetch("https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=vdumeaux.bsky.social&limit=10&filter=posts_no_replies").then((r) => r.json()),
    fetch("https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=vdumeaux.bsky.social").then((r) => r.json())]
    ).then(([feed, prof]) => {
      setPosts((feed.feed || []).filter((f) => f.post?.record?.text).slice(0, 10));
      setProfile(prof);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);
  if (loading) return <div style={{ fontFamily: MONO, fontSize: 11, color: MUTED }}>Loading…</div>;
  if (!posts.length) return null;
  const VISIBLE = 4;
  const upDisabled = idx === 0;
  const downDisabled = idx + VISIBLE >= posts.length;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {profile?.avatar && <img src={profile.avatar} style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover" }} />}
          <svg width="13" height="12" viewBox="0 0 600 530" fill={WP}><path d="M135.72 44.03C202.216 98.953 273.74 210.315 300 267.182c26.262-56.867 97.786-168.23 164.28-223.152C512.26 5.314 590-9.95 590 68.825c0 15.437-8.864 129.719-14.065 148.257-18.09 64.686-84.017 81.157-142.651 71.148 102.42 17.424 128.522 75.098 72.19 132.772-106.947 109.756-153.67-27.53-165.528-62.617-2.178-6.383-3.195-9.355-3.247-6.822-.052-2.533-1.069.44-3.247 6.822-11.858 35.088-58.581 172.373-165.528 62.617-56.332-57.674-30.23-115.348 72.19-132.772C178.882 298.34 112.954 281.869 94.865 217.183 89.664 198.644 80.8 84.362 80.8 68.825c0-78.774 77.74-63.512 154.92-24.795z" /></svg>
          <a href="https://bsky.app/profile/vdumeaux.bsky.social" target="_blank" style={{ fontFamily: MONO, fontSize: 10, color: WP, textDecoration: "none", letterSpacing: 0.5 }}>@vdumeaux.bsky.social</a>
        </div>
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <span style={{ fontFamily: MONO, fontSize: 9, color: MUTED }}>{idx + 1}–{Math.min(idx + VISIBLE, posts.length)} / {posts.length}</span>
          <button onClick={() => setIdx((i) => Math.max(0, i - VISIBLE))} disabled={upDisabled} style={{ background: "none", border: `1px solid ${RULE}`, color: upDisabled ? RULE : MUTED, width: 24, height: 24, cursor: upDisabled ? "default" : "pointer", fontSize: 11, fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center" }}>↑</button>
          <button onClick={() => setIdx((i) => Math.min(posts.length - VISIBLE, i + VISIBLE))} disabled={downDisabled} style={{ background: "none", border: `1px solid ${RULE}`, color: downDisabled ? RULE : MUTED, width: 24, height: 24, cursor: downDisabled ? "default" : "pointer", fontSize: 11, fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center" }}>↓</button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {posts.slice(idx, idx + VISIBLE).map((p) => {
          const r = p.post.record;
          const d = new Date(r.createdAt).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
          const u = `https://bsky.app/profile/${p.post.author.handle}/post/${p.post.uri.split("/").pop()}`;
          const embed = p.post.embed;
          let thumb = null;
          if (embed?.$type === "app.bsky.embed.images#view") thumb = embed.images?.[0]?.thumb;else
          if (embed?.$type === "app.bsky.embed.external#view") thumb = embed.external?.thumb;
          return (
            <a key={p.post.uri} href={u} target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="bsky-card" style={{ background: BG2, border: `1px solid ${RULE}`, padding: "10px 12px", display: "grid", gridTemplateColumns: thumb ? "60px 1fr" : "1fr", gap: 10, alignItems: "start" }}>
                {thumb && <img src={thumb} style={{ width: 60, height: 60, objectFit: "cover" }} onError={(e) => e.target.style.display = "none"} />}
                <div>
                  <div style={{ fontSize: 12, lineHeight: 1.45, color: INK }}>{r.text.slice(0, 120)}{r.text.length > 120 ? "…" : ""}</div>
                  <div style={{ fontFamily: MONO, fontSize: 9, color: MUTED, marginTop: 4, letterSpacing: 0.5 }}>{d}</div>
                </div>
              </div>
            </a>);

        })}
      </div>
    </div>);

}

function BlueskyCarousel() {
  const [posts, setPosts] = React.useState([]);
  const [profile, setProfile] = React.useState(null);
  const [idx, setIdx] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    Promise.all([
    fetch("https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=vdumeaux.bsky.social&limit=10&filter=posts_no_replies").then((r) => r.json()),
    fetch("https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=vdumeaux.bsky.social").then((r) => r.json())]
    ).then(([feed, prof]) => {
      setPosts((feed.feed || []).filter((f) => f.post?.record?.text).slice(0, 5));
      setProfile(prof);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);
  if (loading) return <div style={{ fontFamily: MONO, fontSize: 11, color: MUTED, padding: "20px 0" }}>Loading…</div>;
  if (!posts.length) return null;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, alignItems: "start" }}>
      <div>
        {profile?.avatar && <img src={profile.avatar} style={{ width: 56, height: 56, borderRadius: "50%", marginBottom: 10, objectFit: "cover" }} />}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <svg width="13" height="12" viewBox="0 0 600 530" fill={WP}><path d="M135.72 44.03C202.216 98.953 273.74 210.315 300 267.182c26.262-56.867 97.786-168.23 164.28-223.152C512.26 5.314 590-9.95 590 68.825c0 15.437-8.864 129.719-14.065 148.257-18.09 64.686-84.017 81.157-142.651 71.148 102.42 17.424 128.522 75.098 72.19 132.772-106.947 109.756-153.67-27.53-165.528-62.617-2.178-6.383-3.195-9.355-3.247-6.822-.052-2.533-1.069.44-3.247 6.822-11.858 35.088-58.581 172.373-165.528 62.617-56.332-57.674-30.23-115.348 72.19-132.772C178.882 298.34 112.954 281.869 94.865 217.183 89.664 198.644 80.8 84.362 80.8 68.825c0-78.774 77.74-63.512 154.92-24.795z" /></svg>
          <a href="https://bsky.app/profile/vdumeaux.bsky.social" target="_blank" style={{ fontFamily: MONO, fontSize: 10, color: WP, textDecoration: "none" }}>@vdumeaux.bsky.social</a>
        </div>
        {profile?.displayName && <div style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: INK, marginBottom: 4 }}>{profile.displayName}</div>}
        {profile?.description && <div style={{ fontSize: 11.5, color: MUTED, lineHeight: 1.45, marginBottom: 8 }}>{profile.description.slice(0, 100)}…</div>}
        <div style={{ fontFamily: MONO, fontSize: 10, color: MUTED }}><strong style={{ color: INK }}>{profile?.followersCount?.toLocaleString()}</strong> followers</div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: MUTED }}>Recent posts</div>
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <span style={{ fontFamily: MONO, fontSize: 9, color: MUTED }}>{idx + 1} / {posts.length}</span>
            <button onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={idx === 0} style={{ background: "none", border: `1px solid ${RULE}`, color: idx === 0 ? RULE : MUTED, width: 26, height: 26, cursor: idx === 0 ? "default" : "pointer", fontSize: 12, fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
            <button onClick={() => setIdx((i) => Math.min(posts.length - 1, i + 1))} disabled={idx === posts.length - 1} style={{ background: "none", border: `1px solid ${RULE}`, color: idx === posts.length - 1 ? RULE : MUTED, width: 26, height: 26, cursor: idx === posts.length - 1 ? "default" : "pointer", fontSize: 12, fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          {posts.slice(idx, idx + 3).map((p) => {
            const r = p.post.record;
            const d = new Date(r.createdAt).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
            const u = `https://bsky.app/profile/${p.post.author.handle}/post/${p.post.uri.split("/").pop()}`;
            const embed = p.post.embed;
            let thumb = null;
            if (embed?.$type === "app.bsky.embed.images#view") thumb = embed.images?.[0]?.thumb;else
            if (embed?.$type === "app.bsky.embed.external#view") thumb = embed.external?.thumb;
            return (
              <a key={p.post.uri} href={u} target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "#fff", border: `1px solid ${RULE}`, padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                  {thumb && <img src={thumb} style={{ width: "100%", height: 80, objectFit: "cover" }} onError={(e) => e.target.style.display = "none"} />}
                  <div style={{ fontSize: 12, lineHeight: 1.5, color: INK }}>{r.text.slice(0, 140)}{r.text.length > 140 ? "…" : ""}</div>
                  <div style={{ fontFamily: MONO, fontSize: 9, color: MUTED, letterSpacing: 0.5 }}>{d}</div>
                </div>
              </a>);

          })}
        </div>
      </div>
    </div>);

}

// ─── Home ────────────────────────────────────────────────────────────────────
function HomePage({ tw, recentPapers = [], software = [], news = [] }) {
  const headlines = {
    cancer: { main: ["We study cancer", "in the context", "of the"], accent: "whole patient." },
    cells: { main: [], accent: "" },
    custom: { main: ["Reading biology", "at the scale", "of the"], accent: "individual." }
  };
  const hl = headlines[tw.headline] || headlines.cells;

  return (
    <div style={{ background: BG, color: INK, minHeight: "100vh" }}>
      <Nav active="Home" />

      {/* Hero */}
      <div className="hero section-pad" style={{ padding: "64px 40px 56px", display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 36, alignItems: "start" }}>
        <div>
          <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: WP, marginBottom: 28 }}>
            Dumeaux Lab — Est. 2022
          </div>
          <h1 style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 56, lineHeight: 1.08, letterSpacing: -0.8, margin: 0 }}>
            From single cells<br />
            to <em style={{ color: WP, fontStyle: "italic" }}>patients</em> —<br />
            immunity,<br />
            tumors,<br />
            microbiomes.
          </h1>
          <p className="hero-blurb" style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.65, color: MUTED, marginTop: 22, maxWidth: 620 }}>We apply single-cell and computational genomics to two connected problems: the crosstalk between a patient's immune system and their breast tumor, and the functional variation within human microbial communities — from gut microbiomes to fungal pathogens.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <button onClick={() => window.location.href = "/research"} style={{ background: WP, color: "#fff", border: "none", padding: "13px 24px", fontFamily: SANS, fontSize: 13, fontWeight: 600, cursor: "pointer", letterSpacing: 0.2 }}>Read our research →</button>
            <button onClick={() => window.location.href = "/team"} style={{ background: "none", color: INK, border: `1.5px solid ${INK}`, padding: "13px 24px", fontFamily: SANS, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Meet the team</button>
          </div>
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WG }}>Schulich School of Medicine & Dentistry</div>
            <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WG }}>Department of Anatomy & Cell Biology · Western University, London ON</div>
          </div>
        </div>
        {/* Hero visual — conceptual mark panel */}
        <div className="hero-panel" style={{ background: `linear-gradient(145deg, ${WD} 0%, ${WP} 60%, #7a3abf 100%)`, position: "relative", overflow: "hidden", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 42 }}>
          {/* Subtle background SVG decoration — abstract genomic arcs */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12 }} viewBox="0 0 600 460" preserveAspectRatio="xMidYMid slice">
            {/* Concentric arcs — cell membrane echoes */}
            {[60, 110, 160, 210, 260, 310].map((r, i) =>
            <circle key={i} cx="500" cy="80" r={r} fill="none" stroke="white" strokeWidth="0.8" />
            )}
            {[40, 80, 130, 180].map((r, i) =>
            <circle key={i} cx="80" cy="380" r={r} fill="none" stroke="white" strokeWidth="0.8" />
            )}
            {/* Dotted scatter — data points */}
            {Array.from({ length: 40 }).map((_, i) => {
              const x = 80 + i * 137 % 440;
              const y = 40 + i * 97 % 380;
              return <circle key={i} cx={x} cy={y} r={1.5} fill="white" opacity={0.6} />;
            })}
            {/* Horizontal rule lines */}
            {[100, 200, 300, 400].map((y, i) =>
            <line key={i} x1={0} y1={y} x2={600} y2={y} stroke="white" strokeWidth="0.4" />
            )}
          </svg>
          {/* Central mark */}
          <div style={{ position: "relative", textAlign: "center" }}>
            <img src={MARK_SRC} className="hero-mark" style={{ width: 260, height: 260, objectFit: "contain", display: "block", margin: "0 auto", filter: "brightness(0) invert(1)", opacity: 0.92 }} />
            <div style={{ marginTop: 20, fontFamily: MONO, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
              Dumeaux Lab · Western University
            </div>
          </div>
          {/* Corner labels */}
          <div style={{ position: "absolute", top: 16, left: 16, fontFamily: MONO, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>Immunity</div>
          <div style={{ position: "absolute", top: 16, right: 16, fontFamily: MONO, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.65)", textAlign: "right" }}>Microbiome</div>
          <div style={{ position: "absolute", bottom: 16, left: 16, fontFamily: MONO, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>Genomics</div>
          <div style={{ position: "absolute", bottom: 16, right: 16, fontFamily: MONO, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.65)", textAlign: "right" }}>Single-cell</div>
        </div>
      </div>

      {/* Mission strip */}
      <div className="mission-strip" style={{ background: WP, padding: "36px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", fontFamily: DISPLAY, fontSize: 24, fontWeight: 700, color: "#fff", fontStyle: "italic", lineHeight: 1.4, textAlign: "center" }}>
          "Single-cell and computational genomics are transforming our ability to dissect cell-level heterogeneity — from human immune responses to microbial communities."
        </div>
      </div>

      {/* Research pillars */}
      <div className="research-band section-pad" style={{ padding: "64px 40px", borderBottom: `1px solid ${RULE}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36 }}>
          <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2.5, textTransform: "uppercase", color: WP }}>§ RESEACH</div>
          <span onClick={() => window.location.href = "/research"} style={{ fontFamily: MONO, fontSize: 11, color: WP, cursor: "pointer", letterSpacing: 0.5 }}>All research →</span>
        </div>
        <div className="pillar-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          {PILLARS.map((p, i) =>
          <a key={p.id} href={`/research/${p.id}`} style={{ borderTop: `2px solid ${i === 0 ? WP : RULE}`, paddingTop: 18, minWidth: 0, display: "block", textDecoration: "none", color: "inherit" }}>
              <div style={{ fontFamily: MONO, fontSize: 10, color: WP, marginBottom: 10, letterSpacing: 0.5 }}>{p.num} / 03</div>
              <div style={{ fontFamily: DISPLAY, fontSize: 26, fontWeight: 800, lineHeight: 1.1, marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontFamily: SANS, fontSize: 11, letterSpacing: 0.5, textTransform: "uppercase", color: WP, marginBottom: 16 }}>{p.subtitle}</div>
              <div style={{ marginBottom: 16, height: 120, background: BG2, overflow: "hidden" }}>
                <SciGlyph kind={p.id === "tumor-host" ? "cells" : p.id === "microbiome" ? "heatmap" : "network"} w={300} h={120} stroke={INK} accent={WP} />
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: MUTED }}>{p.blurb}</p>
              <div style={{ marginTop: 12, fontFamily: MONO, fontSize: 9.5, color: MUTED, letterSpacing: 0.3 }}>{p.keywords.join(" · ")}</div>
            </a>
          )}
        </div>
      </div>

      {/* Recent papers + software */}
      <div className="papers-news section-pad" style={{ padding: "56px 40px", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 56, borderBottom: `1px solid ${RULE}` }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 28, fontWeight: 800 }}>Recent publications</h2>
            <span onClick={() => window.location.href = "/papers"} style={{ fontFamily: MONO, fontSize: 11, color: WP, cursor: "pointer" }}>All papers →</span>
          </div>
          {recentPapers.slice(0, 4).map((p, i) =>
          <a key={p.slug || i} href={p.slug ? `/papers/${p.slug}` : "/papers"}
             style={{ padding: "14px 0", borderTop: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "52px 1fr auto", gap: 16, alignItems: "start", textDecoration: "none", color: INK }}>
              <div style={{ fontFamily: MONO, fontSize: 12, color: WP, fontWeight: 500 }}>{p.year}</div>
              <div>
                <div style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.35, marginBottom: 3, fontWeight: 500 }}>{p.title}</div>
                <div style={{ fontSize: 12, color: MUTED }}>{p.authors} · <em>{p.venue}</em></div>
              </div>
              <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: 0.5, textTransform: "uppercase", color: WP, border: `1px solid ${WO}`, padding: "3px 7px", whiteSpace: "nowrap" }}>{p.tag}</div>
            </a>
          )}
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 22, fontWeight: 800 }}>Software & tools</h2>
            <span onClick={() => window.location.href = "/software"} style={{ fontFamily: MONO, fontSize: 11, color: WP, cursor: "pointer" }}>All →</span>
          </div>
          {software.slice(0, 5).map((s, i) =>
          <a key={s.slug || i} href={s.slug ? `/software/${s.slug}` : "/software"}
             style={{ padding: "10px 0", borderTop: `1px solid ${RULE}`, display: "block", textDecoration: "none", color: INK }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontFamily: MONO, fontSize: 12, color: WD, fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: WG }}>{s.year}</span>
              </div>
              <div style={{ fontSize: 12.5, lineHeight: 1.4, color: MUTED }}>{s.blurb}</div>
            </a>
          )}
        </div>
      </div>

      {/* Lab notebook + Bluesky */}
      <div className="lab-notebook section-pad" style={{ padding: "48px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, borderBottom: `1px solid ${RULE}` }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
            <h2 style={{ fontFamily: DISPLAY, fontSize: 28, fontWeight: 800 }}>Lab notebook</h2>
            <span style={{ fontFamily: MONO, fontSize: 11, color: WP, cursor: "pointer" }}>All news →</span>
          </div>
          {news.map((n, i) =>
          <a key={n.slug || i} href={n.slug ? `/news#${n.slug}` : "/news"}
             style={{ padding: "12px 0", borderTop: `1px solid ${RULE}`, display: "block", textDecoration: "none", color: INK }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 4 }}>
                <span style={{ fontFamily: MONO, fontSize: 9, color: WG, letterSpacing: 0.5 }}>{n.date}</span>
                <span style={{ fontFamily: MONO, fontSize: 9, color: WP, letterSpacing: 0.5, textTransform: "uppercase" }}>{n.tag}</span>
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.45, color: INK }}>{n.title}</div>
            </a>
          )}
        </div>
        <div>
          <BlueskyCarouselHorizontal />
        </div>
      </div>

      <Footer />
    </div>);

}

// ─── Research page ────────────────────────────────────────────────────────────
function ResearchPage() {
  return (
    <div style={{ background: BG, color: INK }}>
      <Nav active="Research" />
      <div className="section-pad" style={{ padding: "64px 40px 48px", borderBottom: `1px solid ${RULE}` }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2.5, textTransform: "uppercase", color: WP, marginBottom: 14 }}>§ Research programme</div>
        <h1 className="research-headline" style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 72, lineHeight: 1.0, letterSpacing: -1 }}>
          The tumor in its <em style={{ color: WP, fontStyle: "italic" }}>host.</em><br />
          The microbe in its <em style={{ color: WP, fontStyle: "italic" }}>community.</em><br />
          One cell at a time.
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.6, color: MUTED, marginTop: 24, maxWidth: 680 }}>
          We profile blood, tumors, and microbes from single cells to whole communities — and develop the computational methods that turn those signals into ways to predict, treat, and monitor disease.
        </p>
      </div>
      {PILLARS.map((p, i) => <div key={p.id} className="pillar-card-pad" style={{ padding: "52px 40px", borderBottom: `1px solid ${RULE}`, background: i % 2 === 1 ? BG2 : BG }}>
          <div className="split-3" style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div style={{ fontFamily: MONO, fontSize: 11, color: WP, marginBottom: 10, letterSpacing: 1 }}>{p.num} / 03</div>
              <a href={`/research/${p.id}`} style={{ color: INK, textDecoration: "none" }}>
                <div style={{ fontFamily: DISPLAY, fontSize: 32, fontWeight: 800, lineHeight: 1.05 }}>{p.title}</div>
              </a>
              <div style={{ fontFamily: SANS, fontSize: 11, letterSpacing: 0.5, textTransform: "uppercase", color: MUTED, marginTop: 8 }}>{p.subtitle}</div>
              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.keywords.map((k) => <span key={k} style={{ fontFamily: MONO, fontSize: 9.5, color: WP, border: `1px solid ${WO}`, padding: "3px 8px" }}>{k}</span>)}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: INK }}>{p.blurb}</p>
              <div style={{ marginTop: 16, fontFamily: MONO, fontSize: 9.5, color: MUTED, letterSpacing: 0.5, textTransform: "uppercase" }}>
                Methods — {p.methods.join(" · ")}
              </div>
              <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
                <a href={`/research/${p.id}`} style={{ background: WP, color: "#fff", border: "none", padding: "9px 18px", fontFamily: SANS, fontSize: 12, fontWeight: 600, textDecoration: "none", display: "inline-block" }}>Read full programme →</a>
              </div>
            </div>
            <div style={{ background: BG3, padding: 14 }}>
              <SciGlyph kind={p.id === "tumor-host" ? "cells" : p.id === "microbiome" ? "heatmap" : "network"} w={240} h={160} stroke={INK} accent={WP} />
            </div>
          </div>
        </div>)}
      {/* Collaborators */}
      <div className="section-pad" style={{ padding: "44px 40px", borderBottom: `1px solid ${RULE}` }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP, marginBottom: 14 }}>Key collaborators</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "8px 24px" }}>
          {COLLABS.map((c) => {
            const label = <><span>{c.name}</span><span style={{ fontFamily: SANS, fontWeight: 400, fontSize: 12, color: MUTED, marginLeft: 8 }}>({c.affiliation})</span></>;
            return (
              <div key={c.name} style={{ fontFamily: SANS, fontSize: 15, fontWeight: 600, padding: "6px 0" }}>
                {c.url
                  ? <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ color: INK, textDecoration: "none", borderBottom: `1px solid ${WO}` }}>{label}</a>
                  : label}
              </div>
            );
          })}
        </div>
      </div>
      {/* Funders — logos on white tiles */}
      <div className="section-pad" style={{ padding: "44px 40px", borderBottom: `1px solid ${RULE}` }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP, marginBottom: 18 }}>Funding sources</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14 }}>
          {FUNDERS.map((f) =>
            <a key={f.name} href={f.url} target="_blank" rel="noopener noreferrer"
               title={f.name}
               style={{ background: "#ffffff", border: `1px solid ${RULE}`, padding: "18px 16px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 90, textDecoration: "none" }}>
              <img src={f.logo} alt={f.name}
                   style={{ maxWidth: "100%", maxHeight: 56, objectFit: "contain", display: "block" }} />
            </a>
          )}
        </div>
      </div>
      <Footer />
    </div>);

}

// ─── PI detail page ───────────────────────────────────────────────────────────
function PIPage() {
  return (
    <div style={{ background: BG, color: INK }}>
      <Nav active="people" />
      {/* Back */}
      <div className="section-pad" style={{ padding: "16px 40px", borderBottom: `1px solid ${RULE}` }}>
        <span onClick={() => window.location.href = "/team"} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1, color: WP, cursor: "pointer" }}>← The Lab</span>
      </div>
      {/* Hero */}
      <div className="pi-hero section-pad" style={{ padding: "48px 40px", borderBottom: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "220px 1fr", gap: 48 }}>
        <div>
          <img src={TEAM_PHOTOS["vanessa"]} style={{ width: "100%", aspectRatio: "1", objectFit: "cover", objectPosition: "center top", display: "block", marginBottom: 16 }} />
          <div style={{ fontFamily: MONO, fontSize: 10, color: WP, letterSpacing: 0.5, marginBottom: 6 }}>Principal Investigator</div>
          <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.6, marginBottom: 14 }}>
            <div>vdumeaux@uwo.ca</div>
            <div>Western University</div>
            <div>London, Ontario, Canada</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[["Google Scholar", "https://scholar.google.com/citations?user=bUlQRqMAAAAJ"], ["GitHub", "https://github.com/vdumeaux"], ["Bluesky", "https://bsky.app/profile/vdumeaux.bsky.social"]].map(([l, h]) =>
            <a key={l} href={h} target="_blank" style={{ fontFamily: MONO, fontSize: 10, color: WP, textDecoration: "none", letterSpacing: 0.5 }}>{l} →</a>
            )}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2.5, textTransform: "uppercase", color: WP, marginBottom: 10 }}>§ Principal Investigator</div>
          <h1 className="pi-headline" style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 52, letterSpacing: -0.8, marginBottom: 20, lineHeight: 1.05 }}>Vanessa Dumeaux</h1>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: INK, maxWidth: 680, marginBottom: 14 }}>
            Dr. Dumeaux received her doctorate in Pharmacy in 2002 in France. She then obtained her Ph.D. in molecular epidemiology, a joint degree from the University of Tromsø (Norway) and the University of Paris-Sud XI (France). During her PhD, she developed expertise in genomics in the group of Professeur Børresen-Dale at the Norwegian Radium Hospital — among the pioneers in expression profiling of breast carcinomas in collaboration with groups at Stanford University.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: INK, maxWidth: 680, marginBottom: 14 }}>
            During her post-doc, she visited the Department of Applied Mathematics (University of Paris Descartes) and the Laboratory of Bioinformatics and Functional Genomics (Princeton University), and moved to Canada in 2009 to continue her research in bioinformatics and genomics at McGill and Concordia University.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: INK, maxWidth: 680 }}>
            She joined Western University as an Assistant Professor in the Department of Anatomy and Cell Biology in April 2022, with cross-appointments in the Departments of Biochemistry and Oncology, and is an Affiliate Scientist at the London Health Sciences Centre Research Institute and the Children's Health Research Institute.
          </p>
        </div>
      </div>

      {/* Employment */}
      <div className="pi-section sidebar-row section-pad" style={{ padding: "40px 40px", borderBottom: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "200px 1fr", gap: 48 }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP }}>Employment</div>
        <div>
          {[
          { year: "2022–", role: "Assistant Professor, Dept. of Anatomy & Cell Biology, Schulich School of Medicine & Dentistry, Western University" },
          { year: "2022–", role: "Affiliate Assistant Professor, Department of Biochemistry, Western University" },
          { year: "2022–", role: "Affiliate Assistant Professor, Department of Oncology, Western University" },
          { year: "2022–", role: "Affiliate Scientist, London Health Sciences Centre Research Institute & Children's Health Research Institute" },
          { year: "2022–", role: "Member, Center for Translational Cancer Research, Western University" },
          { year: "2017–2022", role: "Freelance Consultant, Dumeaux Data Science" },
          { year: "2020–2022", role: "Founder & President, SCIEL (Single-Cell, Informatics, Experiment, Learning) coopérative" },
          { year: "2017–2021", role: "Senior Scientist, PERFORM Centre, Concordia University" },
          { year: "2014–2017", role: "Research Scientist, Breast Cancer Informatics Laboratory, McGill University" },
          { year: "2011–2014", role: "Research Scientist, UiT The Arctic University of Norway, visiting McGill University" },
          { year: "2006–2011", role: "Post-Doctoral & Research Fellow, UiT The Arctic University of Norway" }].
          map((e, i) =>
          <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 20, padding: "10px 0", borderTop: `1px solid ${RULE}` }}>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: WP, letterSpacing: 0.3 }}>{e.year}</div>
              <div style={{ fontSize: 14, lineHeight: 1.5 }}>{e.role}</div>
            </div>
          )}
        </div>
      </div>

      {/* Education */}
      <div className="pi-section sidebar-row section-pad" style={{ padding: "40px 40px", borderBottom: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "200px 1fr", gap: 48, background: BG2 }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP }}>Education</div>
        <div>
          {[
          { year: "2005", degree: "PhD Molecular Epidemiology", inst: "University of Paris XI & The Arctic University of Norway" },
          { year: "2002", degree: "MSc Epidemiology and Public Health", inst: "University of Bordeaux II, France" },
          { year: "2002", degree: "Doctor in Pharmacy", inst: "University of Poitiers, France" }].
          map((e, i) =>
          <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 20, padding: "10px 0", borderTop: `1px solid ${RULE}` }}>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: WP }}>{e.year}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{e.degree}</div>
                <div style={{ fontSize: 12.5, color: MUTED, marginTop: 2 }}>{e.inst}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Funding */}
      <div className="pi-section sidebar-row section-pad" style={{ padding: "40px 40px", borderBottom: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "200px 1fr", gap: 48 }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP }}>Funding (past 5 years)</div>
        <div>
          {[
          { year: "2024–2029", role: "Principal Applicant", funder: "NSERC Operating Grant", title: "Computational and genomic approaches for the characterization of host-adapted microbial communities" },
          { year: "2023–2025", role: "Principal Applicant", funder: "Cancer Research Society / CIHR-ICR", title: "High-resolution mapping of cancer immunity to predict response to therapy in HER2-positive breast cancer patients" },
          { year: "2023–2025", role: "Principal Applicant", funder: "Schulich Collaborative Research Seed Grant", title: "Tumor and systemic immune markers for measuring breast cancer response to therapy" },
          { year: "2023–2027", role: "Co-applicant", funder: "CIHR Project grant", title: "Predicting Radiation Response Following Breast-Conserving Therapy for DCIS (PI: Rakovitch, Hallett)" },
          { year: "2023–2028", role: "Co-applicant", funder: "Canada Foundation JELF", title: "Computational infrastructure for data science in human health (PI: Hallett, Guthrie, Hu)" },
          { year: "2022–2027", role: "Principal Applicant", funder: "CIHR Project grant", title: "Identification of functional epigenomic regions in sperm (NPI: Sarah Kimmins)" }].
          map((f, i) =>
          <div key={i} style={{ padding: "12px 0", borderTop: `1px solid ${RULE}` }}>
              <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 4 }}>
                <span style={{ fontFamily: MONO, fontSize: 10, color: WP }}>{f.year}</span>
                <span style={{ fontFamily: MONO, fontSize: 9.5, color: WG, textTransform: "uppercase", letterSpacing: 0.5 }}>{f.role}</span>
                <span style={{ fontFamily: SANS, fontSize: 12.5, fontWeight: 500 }}>{f.funder}</span>
              </div>
              <div style={{ fontSize: 13, color: MUTED, fontStyle: "italic" }}>{f.title}</div>
            </div>
          )}
        </div>
      </div>

      {/* Invited talks */}
      <div className="pi-section sidebar-row section-pad" style={{ padding: "40px 40px", borderBottom: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "200px 1fr", gap: 48, background: BG2 }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP }}>Invited talks</div>
        <div>
          {[
          { year: "2026", venue: "SciLifeLab, KTH Royal Institute of Technology, Stockholm, Sweden", title: "Peripheral immunity, microbial communities, and the power of single-cell resolution" },
          { year: "2026", venue: "Systems Biology Workshop, McGill-Bellairs Research Institute, Holetown, Barbados", title: "Insights from tumor genomics and systemic immunity for personalized breast cancer management" },
          { year: "2025", venue: "CanFunNet (virtual, plenary)", title: "Characterization of transcriptional programs supporting drug tolerance in Candida albicans" },
          { year: "2025", venue: "Memorial Sloan Kettering Cancer Center, New York", title: "Insights from tumor genomics and systemic immunity for personalized breast cancer management" },
          { year: "2025", venue: "Microbiome Virtual International Forum", title: "Functional archetypes in the human gut microbiome reveal metabolic diversity, stability, and confound disease-associated signatures" },
          { year: "2025", venue: "Systems Biology Workshop, McGill-Bellairs Research Institute, Holetown, Barbados", title: "Delineating Functional Patterns in Global Gut Microbiomes with Archetypal Deep Learning Analysis" },
          { year: "2024", venue: "Stanford Cancer Biology Seminar Series", title: "From Genes to Microbes: Multidimensional Approaches for Predicting Breast Cancer Therapy Responses" },
          { year: "2024", venue: "Having IMPACTT symposium, Canmore AB", title: "Unraveling the functionality of microbiomes with novel computational and single-cell profiling approaches" },
          { year: "2023", venue: "Schulich New Faculty Lecture Series, London", title: "Single-Cell Profiling of Systemic Immunity and Gut Microbiome: A Path to Better Understanding Human Health and Disease" },
          { year: "2022", venue: "Oncology Grand Rounds, London", title: "Approaches to predictive breast cancer biomarker panels that integrate the tumor microenvironment and the patient systemic response" }].
          map((l, i) =>
          <div key={i} style={{ padding: "10px 0", borderTop: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "60px 1fr", gap: 16 }}>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: WP }}>{l.year}</div>
              <div>
                <div style={{ fontSize: 14, lineHeight: 1.35 }}>{l.title}</div>
                <div style={{ fontSize: 11.5, color: MUTED, marginTop: 3, fontStyle: "italic" }}>{l.venue}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>);

}

// ─── The Lab page ─────────────────────────────────────────────────────────────
function TeamModal({ member, onClose }) {
  if (!member) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: BG, maxWidth: 760, width: "100%", maxHeight: "88vh", overflowY: "auto", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 14, right: 14, background: "none", border: "none", fontSize: 22, cursor: "pointer", color: MUTED, lineHeight: 1, zIndex: 2 }}>×</button>
        <div className="modal-row" style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 0 }}>
          <div style={{ background: BG3 }}>
            <img src={TEAM_PHOTOS[member.photoKey]} style={{ width: "100%", aspectRatio: "1", objectFit: "cover", objectPosition: "center top", display: "block" }} />
          </div>
          <div style={{ padding: "28px 24px 20px" }}>
            <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP, marginBottom: 6 }}>{member.role}</div>
            <div style={{ fontFamily: DISPLAY, fontSize: 28, fontWeight: 800, letterSpacing: -0.4, marginBottom: 4 }}>{member.name}</div>
            <div style={{ fontFamily: MONO, fontSize: 10, color: WG, marginBottom: 10 }}>Joined {member.joined}</div>
            {member.email && <div style={{ fontFamily: MONO, fontSize: 10, color: WP, marginBottom: 10 }}>{member.email}</div>}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {member.scholar && <a href={member.scholar} target="_blank" style={{ fontFamily: MONO, fontSize: 9.5, color: WP, textDecoration: "none", border: `1px solid ${WO}`, padding: "4px 9px" }}>Scholar →</a>}
              {member.github && <a href={member.github} target="_blank" style={{ fontFamily: MONO, fontSize: 9.5, color: WP, textDecoration: "none", border: `1px solid ${WO}`, padding: "4px 9px" }}>GitHub →</a>}
            </div>
          </div>
        </div>
        <div style={{ padding: "0 24px 28px" }}>
          {member.bio &&
          <div style={{ padding: "14px 0", borderTop: `1px solid ${RULE}` }}>
              <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: MUTED, marginBottom: 8 }}>About</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.65, color: INK }}>{member.bio}</p>
            </div>
          }
          {member.research &&
          <div style={{ padding: "14px 0", borderTop: `1px solid ${RULE}` }}>
              <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: MUTED, marginBottom: 8 }}>Research</div>
              {member.research.split(/\r?\n/).filter(Boolean).map((line, i) =>
                <p key={i} style={{ fontSize: 13.5, lineHeight: 1.65, color: INK, margin: i === 0 ? 0 : "8px 0 0" }}>{line}</p>
              )}
            </div>
          }
          {member.education && member.education.length > 0 &&
          <div style={{ padding: "14px 0", borderTop: `1px solid ${RULE}` }}>
              <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: MUTED, marginBottom: 8 }}>Education</div>
              {member.education.map((e, i) => <div key={i} style={{ fontSize: 13, lineHeight: 1.7, color: INK }}>{e}</div>)}
            </div>
          }
          {member.awards && member.awards.length > 0 &&
          <div style={{ padding: "14px 0", borderTop: `1px solid ${RULE}` }}>
              <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: MUTED, marginBottom: 8 }}>Awards & fellowships</div>
              {member.awards.map((a, i) => <div key={i} style={{ fontSize: 13, lineHeight: 1.7, color: INK }}>• {a}</div>)}
            </div>
          }
        </div>
      </div>
    </div>);

}

function PeoplePage({ team = [] }) {
  const [selected, setSelected] = React.useState(null);
  return (
    <div style={{ background: BG, color: INK }}>
      <TeamModal member={selected} onClose={() => setSelected(null)} />
      <Nav active="people" />

      {/* Hero — identity */}
      <div className="section-pad" style={{ padding: "64px 40px 48px", borderBottom: `1px solid ${RULE}` }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2.5, textTransform: "uppercase", color: WP, marginBottom: 14 }}>§ The Lab</div>
        <h1 className="team-headline" style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 64, lineHeight: 1.0, letterSpacing: -1 }}>
          Science, data, and <em style={{ color: WP, fontStyle: "italic" }}>people.</em>
        </h1>
        <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.65, color: MUTED, marginTop: 20, maxWidth: 680 }}>A computational biology lab at Western University. We maintain both a wet lab (sample processing, single-cell profiling) and a dry lab (high-throughput data analysis).

        </p>
      </div>

      {/* PI */}
      <div onClick={() => window.location.href = "/pi"} className="pi-card-row" style={{ padding: "32px 40px", borderBottom: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "72px 1fr", gap: 24, alignItems: "start", background: BG2, cursor: "pointer" }}>
        <img src={TEAM_PHOTOS["vanessa"]} style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", objectPosition: "center top" }} />
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
            <div style={{ fontFamily: DISPLAY, fontSize: 24, fontWeight: 800, letterSpacing: -0.3 }}>Vanessa Dumeaux</div>
            <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 1.5, textTransform: "uppercase", color: WP }}>Principal Investigator</div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: MUTED, maxWidth: 800 }}>Assistant Professor, Dept. of Anatomy & Cell Biology, Schulich School of Medicine & Dentistry, Western University; cross-appointed in Biochemistry and Oncology. Affiliate Scientist, London Health Sciences Centre Research Institute & Children's Health Research Institute. PhD in molecular epidemiology (Tromsø / Paris-Sud XI). Previously Research Scientist at McGill, Concordia, and UiT. Works at the boundary of epidemiology, single-cell genomics, and computational biology.</p>
          <div style={{ display: "flex", gap: 14, marginTop: 10, fontFamily: MONO, fontSize: 10, color: WP }}>
            {["Google Scholar →", "GitHub →", "Bluesky →", "CV (PDF) →"].map((l) => <span key={l} style={{ cursor: "pointer" }}>{l}</span>)}
          </div>
        </div>
      </div>

      {/* Current team */}
      <div className="section-pad" style={{ padding: "40px 40px 32px" }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: MUTED, marginBottom: 20 }}>Current trainees & research staff</div>
        <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }}>
          {team.filter((t) => !t.alum && t.role !== "Principal Investigator").map((t, i) =>
          <div key={i} onClick={() => setSelected(t)} style={{ display: "grid", gridTemplateColumns: "64px 1fr auto", alignItems: "center", gap: 16, padding: "14px 0", borderTop: `1px solid ${RULE}`, cursor: "pointer" }}>
              <img src={TEAM_PHOTOS[t.photoKey]} style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: SANS, fontSize: 16, fontWeight: 500 }}>{t.name}</div>
                <div style={{ fontFamily: MONO, fontSize: 10, color: WP, letterSpacing: 0.5, textTransform: "uppercase", marginTop: 3 }}>{t.role}</div>
                {t.bio && <div style={{ fontSize: 12, color: MUTED, marginTop: 3 }}>{t.bio}</div>}
              </div>
              <div style={{ fontFamily: MONO, fontSize: 10, color: WG }}>{t.joined}</div>
            </div>
          )}
        </div>
      </div>

      {/* Mentoring strip */}
      <div className="section-pad" style={{ padding: "36px 40px", background: WP, color: "#fff" }}>
        <div className="split-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 10 }}>Training environment</div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.88)" }}>
              Students join the <a href="https://www.schulich.uwo.ca/anatomy/graduate/program_information/index.html" target="_blank" style={{ color: "#fff", textDecoration: "underline" }}>Anatomy & Cell Biology</a> or <a href="https://www.schulich.uwo.ca/biochem/graduate/index.html" target="_blank" style={{ color: "#fff", textDecoration: "underline" }}>Biochemistry</a> graduate programs. Computational students can join the <a href="https://uwo.ca/sci/datascience/graduate/collaborative-specialization-ml-health-biomedical.html" target="_blank" style={{ color: "#fff", textDecoration: "underline" }}>Collaborative Specialization in Machine Learning in Health and Biomedical Sciences</a>. Regular one-on-ones, group meetings, and journal clubs.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 10 }}>Mentoring approach</div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.88)" }}>
              We help trainees translate biological questions into quantitative exploration. We teach R, Python, molecular profiling, and single-cell technologies. We share wet-lab and dry-lab resources with the Hallett lab.
            </p>
          </div>
        </div>
      </div>

      {/* Lab values — compact */}
      <div className="split-4 section-pad" style={{ padding: "28px 40px", borderBottom: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 32 }}>
        {[
        { title: "Curiosity", text: "Science is fascinating and fun. Big questions and day-to-day joy." },
        { title: "Persistence", text: "Research gets hard. There's always something to learn." },
        { title: "Openness", text: "Open science, open code, open to being wrong." },
        { title: "Transparency", text: "Honest discussion about data, results, and lab life." }].
        map((v, i) =>
        <div key={v.title} style={{ borderTop: `2px solid ${i === 3 ? WP : RULE}`, paddingTop: 12 }}>
            <div style={{ fontFamily: DISPLAY, fontSize: 14, fontWeight: 800, color: i === 3 ? WP : INK, marginBottom: 6 }}>{v.title}</div>
            <p style={{ fontSize: 12, lineHeight: 1.5, color: MUTED }}>{v.text}</p>
          </div>
        )}
      </div>

      {/* Alumni */}
      <div className="section-pad" style={{ padding: "36px 40px", borderBottom: `1px solid ${RULE}`, background: BG2 }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: MUTED, marginBottom: 16 }}>Alumni</div>
        <div className="split-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0 24px" }}>
          {team
            .filter((t) => t.alum)
            .sort((a, b) => {
              // Graduate students (MSc / PhD) first, then everyone else.
              // Within each group: newest joiner first, then name as tiebreaker.
              const gradA = /^(MSc|PhD)/i.test(a.role) ? 1 : 0;
              const gradB = /^(MSc|PhD)/i.test(b.role) ? 1 : 0;
              return (gradB - gradA) || ((b.joined ?? 0) - (a.joined ?? 0)) || a.name.localeCompare(b.name);
            })
            .map((t, i) =>
          <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", alignItems: "center", gap: 10, padding: "9px 0", borderTop: `1px solid ${RULE}` }}>
              <img src={TEAM_PHOTOS[t.photoKey]} style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }} />
              <div>
                <div style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500 }}>{t.name}</div>
                <div style={{ fontFamily: MONO, fontSize: 9, color: MUTED, letterSpacing: 0.3, textTransform: "uppercase", marginTop: 1 }}>{t.role}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Join CTA */}
      <div className="cta-row" style={{ padding: "40px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 24 }}>
        <div>
          <div style={{ fontFamily: DISPLAY, fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Interested in joining the lab?</div>
          <div style={{ fontSize: 14, color: MUTED }}>Send a brief email with your CV, transcripts and research interests.</div>
        </div>
        <a href="mailto:vdumeaux@uwo.ca" style={{ background: WP, color: "#fff", padding: "12px 22px", fontFamily: SANS, fontSize: 13, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>Get in touch →</a>
      </div>
      <Footer />
    </div>);

}


// ─── News page (all posts inline, 2-col layout like the old Jekyll blog) ─────
function NewsPage({ posts = [] }) {
  const [activeTag, setActiveTag] = React.useState("All");
  const tags = ["All", ...Array.from(new Set(posts.map((p) => p.tag)))];
  const filtered = activeTag === "All" ? posts : posts.filter((p) => p.tag === activeTag);

  const imgSrc = (name) => NEWS_IMAGES[name] || `/assets/${name}`;

  // Inline-link parser for `p` / `ul` text — supports `[label](url)`.
  // External links open in a new tab; internal `/…` links stay in-tab.
  const renderInline = (text) => {
    const out = [];
    const re = /\[([^\]]+)\]\(([^)]+)\)/g;
    let last = 0, m, key = 0;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) out.push(text.slice(last, m.index));
      const isExternal = /^https?:\/\//.test(m[2]);
      out.push(
        <a key={`l${key++}`} href={m[2]}
           {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
           style={{ color: WP, borderBottom: `1px solid ${WO}`, textDecoration: "none" }}>
          {m[1]}
        </a>
      );
      last = m.index + m[0].length;
    }
    if (last < text.length) out.push(text.slice(last));
    return out.length ? out : text;
  };

  const renderBlock = (b, i) => {
    if (b.type === "h2") return <div key={i} style={{ fontFamily: DISPLAY, fontSize: 22, fontWeight: 800, marginTop: 32, marginBottom: 10 }}>{b.text}</div>;
    if (b.type === "p") return <p key={i} style={{ marginBottom: 14, lineHeight: 1.75 }}>{renderInline(b.text)}</p>;
    if (b.type === "ul") return <ul key={i} style={{ marginBottom: 14, paddingLeft: 20 }}>{b.items.map((it, j) => <li key={j} style={{ marginBottom: 6 }}>{renderInline(it)}</li>)}</ul>;
    if (b.type === "img") return (
      <figure key={i} style={{ margin: "24px 0" }}>
        <img src={imgSrc(b.src)} style={{ maxWidth: "100%", width: "auto", height: "auto", display: "block", borderRadius: 2, imageRendering: "-webkit-optimize-contrast" }} onError={(e) => e.target.style.display = "none"} />
        {b.caption && <figcaption style={{ fontFamily: MONO, fontSize: 10, color: MUTED, marginTop: 8, letterSpacing: 0.5 }}>{b.caption}</figcaption>}
      </figure>);

    if (b.type === "grid") return (
      <div key={i} className="news-image-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${b.images.length}, 1fr)`, gap: 12, margin: "24px 0" }}>
        {b.images.map((img, j) =>
        <figure key={j} style={{ margin: 0 }}>
            <img src={imgSrc(img.src)} style={{ maxWidth: "100%", width: "auto", height: "auto", display: "block", borderRadius: 2, imageRendering: "-webkit-optimize-contrast" }} onError={(e) => e.target.style.display = "none"} />
            {img.caption && <figcaption style={{ fontFamily: MONO, fontSize: 9, color: MUTED, marginTop: 4 }}>{img.caption}</figcaption>}
          </figure>
        )}
      </div>);

    if (b.type === "iframe") return (
      <figure key={i} style={{ margin: "24px 0" }}>
        <div style={{ position: "relative", paddingBottom: "60%", height: 0 }}>
          <iframe src={b.src} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
        </div>
        {b.caption && <figcaption style={{ fontFamily: MONO, fontSize: 10, color: MUTED, marginTop: 8, letterSpacing: 0.5 }}>{b.caption}</figcaption>}
      </figure>
    );
    if (b.type === "bsky") return (
      <div key={i} style={{ margin: "20px 0", padding: "16px", background: BG2, borderLeft: `3px solid ${WP}`, fontSize: 14, lineHeight: 1.6, color: INK }}>
        <div style={{ fontFamily: MONO, fontSize: 9, color: WP, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Bluesky thread</div>
        <p style={{ margin: 0 }}>{b.text}</p>
        <a href={b.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: MONO, fontSize: 10, color: WP, textDecoration: "none", marginTop: 8, display: "block" }}>View on Bluesky →</a>
      </div>
    );
    if (b.type === "youtube") return (
      <figure key={i} style={{ margin: "24px 0" }}>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe src={`https://www.youtube.com/embed/${b.id}`} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} allowFullScreen />
        </div>
        {b.caption && <figcaption style={{ fontFamily: MONO, fontSize: 10, color: MUTED, marginTop: 8, letterSpacing: 0.5 }}>{b.caption}</figcaption>}
      </figure>);

    return null;
  };

  return (
    <div style={{ background: BG, color: INK }}>
      <Nav active="News" />
      <div className="section-pad" style={{ padding: "64px 40px 36px", borderBottom: `1px solid ${RULE}` }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2.5, textTransform: "uppercase", color: WP, marginBottom: 14 }}>§ Lab notebook</div>
        <h1 className="news-headline" style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 60, letterSpacing: -0.8 }}>News & updates.</h1>
      </div>
      {/* Filter pills */}
      <div className="section-pad" style={{ padding: "16px 40px", borderBottom: `1px solid ${RULE}`, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tags.map((t) =>
        <span key={t} onClick={() => setActiveTag(t)} style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 0.5, padding: "5px 12px", background: activeTag === t ? WP : BG3, color: activeTag === t ? "#fff" : MUTED, cursor: "pointer" }}>{t}</span>
        )}
      </div>
      {/* Posts — full body inline, 2-col (meta | content) like the old Jekyll blog */}
      {filtered.map((p) =>
        <article key={p.slug} id={p.slug} className="section-pad" style={{ padding: "48px 40px", borderBottom: `1px solid ${RULE}`, scrollMarginTop: 24 }}>
          <div className="news-row news-post-row" style={{ display: "grid", gridTemplateColumns: "minmax(180px, 260px) 1fr", gap: 48, alignItems: "start" }}>
            <header style={{ position: "sticky", top: 24 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14, flexWrap: "wrap" }}>
                <span style={{ fontFamily: MONO, fontSize: 9.5, color: WG, letterSpacing: 0.5 }}>{p.date}</span>
                <span style={{ fontFamily: MONO, fontSize: 9.5, color: WP, letterSpacing: 0.5, textTransform: "uppercase" }}>{p.tag}</span>
              </div>
              <h2 style={{ fontFamily: DISPLAY, fontSize: 28, fontWeight: 900, lineHeight: 1.1, letterSpacing: -0.4, marginBottom: 12 }}>
                <a href={`#${p.slug}`} style={{ color: INK, textDecoration: "none" }}>{p.title}</a>
              </h2>
              {p.excerpt && <p style={{ fontSize: 13.5, lineHeight: 1.55, color: MUTED, margin: 0 }}>{p.excerpt}</p>}
            </header>
            <div style={{ fontSize: 15.5, lineHeight: 1.75, color: INK, maxWidth: 720 }}>
              {(p.blocks || []).map((b, i) => renderBlock(b, i))}
            </div>
          </div>
        </article>
      )}
      <Footer />
    </div>);

}

// ─── Papers page ─────────────────────────────────────────────────────────────
function PapersPage({ papers = [] }) {
  const [activeFilter, setActiveFilter] = React.useState("All");

  const allTags = ["All", "Tumor × Host", "Microbiome", "Methods", "Epigenetics", "Epidemiology"];
  const allYears = Array.from(new Set(papers.map((p) => p.year))).sort((a, b) => b - a);
  const filters = [...allTags, ...allYears.map(String)];

  const filtered = activeFilter === "All" ? papers :
  isNaN(activeFilter) ? papers.filter((p) => p.tag === activeFilter) :
  papers.filter((p) => p.year === parseInt(activeFilter));

  const byYear = allYears.filter((y) => filtered.some((p) => p.year === y));

  return (
    <div style={{ background: BG, color: INK }}>
      <Nav active="Papers" />
      <div className="section-pad" style={{ padding: "64px 40px 36px", borderBottom: `1px solid ${RULE}`, display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2.5, textTransform: "uppercase", color: WP, marginBottom: 14 }}>§ Publications</div>
          <h1 className="papers-headline" style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 60, letterSpacing: -0.8 }}>
            Publications.
          </h1>
          <div style={{ fontFamily: MONO, fontSize: 10, color: MUTED, letterSpacing: 1, marginTop: 8 }}>
            {filtered.length} papers{activeFilter !== "All" ? ` matching "${activeFilter}"` : allYears.length ? ` · ${allYears[allYears.length-1]}–${allYears[0]}` : ""}
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, fontFamily: MONO, fontSize: 10, letterSpacing: 0.5 }}>
          <span style={{ padding: "7px 14px", border: `1px solid ${RULE}`, cursor: "pointer" }}>BibTeX ↓</span>
        </div>
      </div>
      {/* Filter pills */}
      <div className="section-pad" style={{ padding: "16px 40px", borderBottom: `1px solid ${RULE}`, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {filters.map((f, i) =>
        <span key={f} onClick={() => setActiveFilter(f)}
        style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 0.5, padding: "5px 12px",
          background: activeFilter === f ? WP : BG3, color: activeFilter === f ? "#fff" : MUTED, cursor: "pointer" }}>
            {f}
          </span>
        )}
      </div>
      {/* Papers by year */}
      {byYear.map((year) =>
      <div key={year} className="section-pad" style={{ padding: "28px 40px", borderBottom: `1px solid ${RULE}` }}>
          <div className="sidebar-row" style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 32 }}>
            <div style={{ fontFamily: DISPLAY, fontSize: 36, fontWeight: 900, color: WP, letterSpacing: -0.5, lineHeight: 1 }}>{year}</div>
            <div>
              {filtered.filter((p) => p.year === year).map((p, i) => {
              const href = p.slug ? `/papers/${p.slug}` : null;
              return (
                <div key={p.slug || i} style={{ padding: "14px 0", borderBottom: `1px solid ${RULE}` }}>
                    <div style={{ fontFamily: SANS, fontSize: 15.5, lineHeight: 1.35, marginBottom: 4, fontWeight: 500 }}>
                      {href ?
                        <a href={href} style={{ color: INK, textDecoration: "none" }}
                           onMouseEnter={(e) => e.currentTarget.style.color = WP}
                           onMouseLeave={(e) => e.currentTarget.style.color = INK}>
                          {p.title}
                        </a>
                        : p.title}
                    </div>
                    <div style={{ fontSize: 13, color: MUTED, fontStyle: "italic", marginBottom: 6 }}>{p.authors}</div>
                    <div style={{ display: "flex", gap: 14, fontFamily: MONO, fontSize: 9.5, color: MUTED, letterSpacing: 0.3, flexWrap: "wrap", alignItems: "center" }}>
                      <span>{p.venue}</span>
                      <span style={{ color: WP }}>{p.tag}</span>
                      {p.doi && <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" style={{ color: WP, textDecoration: "none", cursor: "pointer" }}>DOI ↗</a>}
                      {href && <a href={href} style={{ color: WP, textDecoration: "none", borderBottom: `1px solid ${WO}`, cursor: "pointer" }}>Read →</a>}
                    </div>
                    {p.summary &&
                      <div style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.6, color: MUTED }}>
                        {p.summary}
                      </div>
                    }
                  </div>);

            })}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>);

}

// ─── Software detail page ─────────────────────────────────────────────────────
function SoftwareDetailPage({ tool }) {
  const s = tool;
  if (!s) return <div style={{ background: BG }}><Nav active="Software" /><div style={{ padding: "64px 40px" }}><a href="/software" style={{ fontFamily: MONO, fontSize: 10, color: WP, textDecoration: "none" }}>← Software</a></div></div>;
  return (
    <div style={{ background: BG, color: INK }}>
      <Nav active="Software" />
      <div style={{ padding: "16px 40px", borderBottom: `1px solid ${RULE}` }}>
        <span onClick={() => window.location.href = "/software"} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: 1, color: WP, cursor: "pointer" }}>← Software & tools</span>
      </div>
      <div className="section-pad" style={{ padding: "56px 40px 40px", borderBottom: `1px solid ${RULE}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 0.5, textTransform: "uppercase", color: WP, border: `1px solid ${WO}`, padding: "2px 8px" }}>{s.tag}</div>
          <div style={{ fontFamily: MONO, fontSize: 9.5, color: WG }}>{s.year}</div>
        </div>
        <h1 className="software-headline" style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 56, letterSpacing: -0.8, marginBottom: 6 }}>{s.name}</h1>
        {s.fullname && <div style={{ fontFamily: SANS, fontSize: 16, color: MUTED, marginBottom: 18, letterSpacing: -0.2 }}>{s.fullname}</div>}
        <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.65, color: INK, maxWidth: 720, marginBottom: 24 }}>{s.description}</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {s.github && <a href={s.github} target="_blank" style={{ fontFamily: MONO, fontSize: 11, color: WP, textDecoration: "none", border: `1px solid ${WO}`, padding: "7px 14px" }}>GitHub ↗</a>}
          {s.www && <a href={s.www} target="_blank" style={{ fontFamily: MONO, fontSize: 11, color: WP, textDecoration: "none", border: `1px solid ${WO}`, padding: "7px 14px" }}>Live demo ↗</a>}
          {s.paper && <a href={`https://doi.org/${s.paper}`} target="_blank" style={{ fontFamily: MONO, fontSize: 11, color: WP, textDecoration: "none", border: `1px solid ${WO}`, padding: "7px 14px" }}>Paper ↗</a>}
        </div>
      </div>
      {s.repos && s.repos.length > 0 && (
        <div className="software-detail-row sidebar-row section-pad" style={{ padding: "36px 40px", borderBottom: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
          <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP }}>Repositories</div>
          <div>
            {s.repos.map((r, i) => (
              <div key={i} style={{ padding: "12px 0", borderTop: `1px solid ${RULE}` }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
                  <a href={r.url} target="_blank" style={{ fontFamily: MONO, fontSize: 13, fontWeight: 500, color: WP, textDecoration: "none" }}>{r.name} ↗</a>
                </div>
                <div style={{ fontSize: 13.5, lineHeight: 1.55, color: MUTED }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {s.details && s.details.length > 0 && (
        <div className="software-detail-row sidebar-row section-pad" style={{ padding: "36px 40px", borderBottom: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
          <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP }}>Key features</div>
          <div>
            {s.details.map((d, i) => (
              <div key={i} style={{ padding: "10px 0", borderTop: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, alignItems: "start" }}>
                <div style={{ fontFamily: MONO, fontSize: 10, color: WP, marginTop: 2 }}>→</div>
                <div style={{ fontSize: 14.5, lineHeight: 1.55 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {s.install && (
        <div className="software-detail-row sidebar-row section-pad" style={{ padding: "36px 40px", borderBottom: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
          <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP }}>Installation</div>
          <pre style={{ fontFamily: MONO, fontSize: 12.5, lineHeight: 1.7, background: WD, color: "#c8c0d8", padding: "20px 24px", margin: 0, overflowX: "auto", borderRadius: 2 }}>{s.install}</pre>
        </div>
      )}
      <Footer />
    </div>
  );
}

// ─── Software page ────────────────────────────────────────────────────────────
function SoftwarePage({ software = [] }) {
  return (
    <div style={{ background: BG, color: INK }}>
      <Nav active="Software" />
      <div className="section-pad" style={{ padding: "64px 40px 36px", borderBottom: `1px solid ${RULE}` }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2.5, textTransform: "uppercase", color: WP, marginBottom: 14 }}>§ Software & tools</div>
        <h1 className="software-headline" style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 60, letterSpacing: -0.8 }}>Tools we've built and <em style={{ color: WP }}>made public.</em></h1>
        <p style={{ fontFamily: SANS, fontSize: 15, color: MUTED, marginTop: 16, maxWidth: 620, lineHeight: 1.6 }}>Open-source R packages, Python frameworks, and interactive web applications — built out of our research, available for anyone to use.</p>
      </div>
      <div className="software-row section-pad" style={{ padding: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {software.map((s, i) => (
          <div key={s.slug || i} style={{ background: BG2, padding: "24px 24px 20px", borderTop: `3px solid ${WP}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
              <a href={`/software/${s.slug}`} style={{ fontFamily: MONO, fontSize: 17, color: WD, fontWeight: 500, textDecoration: "none" }}>{s.name}</a>
              <div style={{ fontFamily: MONO, fontSize: 9.5, color: WG }}>{s.year}</div>
            </div>
            <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 0.5, textTransform: "uppercase", color: WP, marginBottom: 10, display: "inline-block", border: `1px solid ${WO}`, padding: "2px 8px" }}>{s.tag}</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.55, color: INK }}>{s.blurb}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 14, fontFamily: MONO, fontSize: 10, color: WP }}>
              {s.github && <a href={s.github} target="_blank" rel="noopener noreferrer" style={{ color: WP, textDecoration: "none" }}>GitHub ↗</a>}
              {s.www && <><span style={{ color: RULE }}>·</span><a href={s.www} target="_blank" rel="noopener noreferrer" style={{ color: WP, textDecoration: "none" }}>Demo ↗</a></>}
              <span style={{ color: RULE }}>·</span>
              <a href={`/software/${s.slug}`} style={{ color: WP, textDecoration: "none" }}>Details →</a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

// ─── Contact page ─────────────────────────────────────────────────────────────
function ContactPage() {
  return (
    <div style={{ background: BG, color: INK }}>
      <Nav active="Contact" />
      <div className="section-pad" style={{ padding: "64px 40px 48px", borderBottom: `1px solid ${RULE}` }}>
        <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2.5, textTransform: "uppercase", color: WP, marginBottom: 14 }}>§ Contact</div>
        <h1 className="contact-headline" style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 60, letterSpacing: -0.8 }}>Say <em style={{ color: WP, fontStyle: "italic" }}>hello.</em></h1>
        <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.6, color: MUTED, marginTop: 16, maxWidth: 580 }}>
          We're glad to hear from prospective students, collaborators, and curious scientists.
        </p>
      </div>
      <div className="contact-row split-3 section-pad" style={{ padding: "56px 40px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, borderBottom: `1px solid ${RULE}` }}>
        <div>
          <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP, marginBottom: 14 }}>Email</div>
          <div style={{ fontFamily: DISPLAY, fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Vanessa Dumeaux</div>
          <div style={{ fontFamily: SANS, fontSize: 14, color: MUTED, marginBottom: 8 }}>Principal Investigator</div>
          <a href="mailto:vdumeaux@uwo.ca" style={{ fontFamily: MONO, fontSize: 13, color: WP, textDecoration: "none" }}>vdumeaux@uwo.ca</a>
        </div>
        <div>
          <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP, marginBottom: 14 }}>Location</div>
          <div style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.7, color: INK }}>
            Dept. of Anatomy & Cell Biology<br />Schulich School of Medicine & Dentistry<br />Medical Sciences Building<br />Western University, London ON
          </div>
        </div>
        <div>
          <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 2, textTransform: "uppercase", color: WP, marginBottom: 14 }}>Online</div>
          {[["Bluesky", "https://bsky.app/profile/vdumeaux.bsky.social"], ["GitHub", "https://github.com/dumeaux-lab"], ["Google Scholar", "https://scholar.google.com/citations?user=bUlQRqMAAAAJ"]].map(([label, href]) =>
          <div key={label} style={{ marginBottom: 8 }}><a href={href} target="_blank" style={{ color: WP, textDecoration: "none", fontFamily: MONO, fontSize: 11, letterSpacing: 0.5 }}>{label} →</a></div>
          )}
        </div>
      </div>
      <div className="contact-row split-2 section-pad" style={{ padding: "56px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, borderBottom: `1px solid ${RULE}` }}>
        <div>
          <h2 style={{ fontFamily: DISPLAY, fontSize: 32, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>Joining the lab</h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: MUTED, marginBottom: 20 }}>Curiosity about biology, comfort with data, and willingness to write careful code. Send a brief email with your CV, transcripts and research interests.</p>
          <a href="mailto:vdumeaux@uwo.ca" style={{ display: "inline-block", background: WP, color: "#fff", padding: "13px 24px", fontFamily: SANS, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Contact us →</a>
        </div>
        <div>
          <h2 style={{ fontFamily: DISPLAY, fontSize: 32, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>Collaborations</h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: MUTED }}>We collaborate across computational biology, cancer genomics, microbiology, immunology, and clinical research. If you have a dataset, a question, or complementary expertise — reach out.</p>
        </div>
      </div>
      <Footer />
    </div>);

}

export { PatientNetworkDiagram, HeroDiagram, Nav, Footer, BlueskyCarouselHorizontal, BlueskyCarousel, HomePage, ResearchPage, PIPage, TeamModal, PeoplePage, NewsPage, PapersPage, SoftwareDetailPage, SoftwarePage, ContactPage };
