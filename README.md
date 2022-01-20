# Rust 标准库文档中文版

[![LICENSE-MIT](https://img.shields.io/badge/license-MIT-green)](https://raw.githubusercontent.com/rust-lang-cn/std-cn/main/LICENSE-MIT)
[![LICENSE-APACHE](https://img.shields.io/badge/license-Apache%202-blue)](https://raw.githubusercontent.com/rust-lang-cn/std-cn/main/LICENSE-APACHE)
![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang-cn/std-cn?color=gold)
![rustwiki.org](https://img.shields.io/website?up_message=rustwiki.org&url=https%3A%2F%2Frustwiki.org)

**Rust 标准库文档中文版**是 Rust 1.58.0 版本的标准库文档的 HTML 文件，可直接使用浏览器打开，或者阅读[在线版本][std-cn]。

注意，本标准库 HTML 文件使用 [Rust 标准库中文版][rust-library-i18n]生成，中文内容基于机器翻译，不确保所有翻译内容都准确，中文版的最新版本也以该源码仓库的为准。

## 离线阅读说明

克隆仓库并进入到仓库目录：

```bash
$ git clone https://github.com/rust-lang-cn/std-cn
$ cd std-cn
```

标准库内容在 `doc/std` 目录中。可使用浏览器打开来查看内容。

*Firefox*:

```console
$ firefox doc/std/index.html                       # Linux
$ open -a "Firefox" doc/std/index.html             # macOS
$ Start-Process "firefox.exe" .\doc\std\index.html # Windows (PowerShell)
$ start firefox.exe .\doc\std\index.html           # Windows (Cmd)
```

*Chrome*:

```console
$ google-chrome doc/std/index.html                 # Linux
$ open -a "Google Chrome" doc/std/index.html       # macOS
$ Start-Process "chrome.exe" .\doc\std\index.html  # Windows (PowerShell)
$ start chrome.exe .\doc\std\index.html            # Windows (Cmd)
```

## 如何贡献

**Rust 标准库文档中文版**由 **Rust 标准库中文版**的源文件生成得到，故本仓库不对内容额外调整，若是发现文档内容有误，可到[Rust 标准库中文版][rust-library-i18n]发起报告。

## 授权协议

**Rust 标准库文档**中文版使用以下两种协议的任一种进行授权：

- Apache 2.0 授权协议，（LICENSE-APACHE 或 http://www.apache.org/licenses/LICENSE-2.0）
- MIT 授权协议 (LICENSE-MIT 或 http://opensource.org/licenses/MIT)
可以根据自己选择来定。

除非您有另外说明，否则您在本仓库提交的任何贡献均按上述方式进行双重许可授权，就如 Apache 2.0 协议所规定那样，而无需附加任何其他条款或条件。

[std-cn]: https://rustwiki.org/zh-CN/std/
[rust-library-i18n]: https://github.com/wtklbm/rust-library-i18n
