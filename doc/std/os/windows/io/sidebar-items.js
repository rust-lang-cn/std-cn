initSidebarItems({"struct":[["BorrowedHandle","借来的句柄。"],["BorrowedSocket","借来的套接字。"],["HandleOrInvalid","返回值或输出参数句柄的 FFI 类型，其中 `INVALID_HANDLE_VALUE` 用作哨兵值以指示错误，例如在 `CreateFileW` 的返回值中。 这使用 `repr(transparent)` 并具有主机句柄的表示，因此它可以用于此类 FFI 声明。"],["HandleOrNull","返回值或输出参数句柄的 FFI 类型，其中 `NULL` 用作指示错误的哨兵值，例如在 `CreateThread` 的返回值中。 这使用 `repr(transparent)` 并具有主机句柄的表示，因此它可以用于此类 FFI 声明。"],["OwnedHandle","拥有所有权的句柄。"],["OwnedSocket","一个拥有所有权的套接字。"]],"trait":[["AsHandle","从底层对象借用句柄的 trait。"],["AsRawHandle","提取原始句柄。"],["AsRawSocket","提取原始套接字。"],["AsSocket","从底层对象借用套接字的 trait。"],["FromRawHandle","从原始句柄构造 I/O 对象。"],["FromRawSocket","从原始套接字创建 I/O 对象。"],["IntoRawHandle","一个 trait，表示消费一个对象并获得其原始 `HANDLE` 所有权的能力。"],["IntoRawSocket","一个 trait，表示消费一个对象并获得其原始 `SOCKET` 所有权的能力。"]],"type":[["RawHandle","原始的句柄。"],["RawSocket","未加工的袜子。"]]});